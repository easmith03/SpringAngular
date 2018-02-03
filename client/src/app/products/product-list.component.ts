import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
 
  pageTitle: String = 'Product List';
  imageWidth: number = 50;
  imageMargin: number =2;
  products: IProduct[] ;
  showImage: boolean = false;
  _listFilter: string = '';
  filteredProducts: IProduct[];
  errorMessage: string;

  constructor(private _productService: ProductService) {
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get listFilter(): string {
    return this._listFilter;  
  }

  set listFilter(filter: string) {
    this._listFilter = filter;
    this.filteredProducts = this._listFilter ? this.performListFilter(this._listFilter) : this.products; 
  }

  performListFilter(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter(p => {
      return p.productName.toLocaleLowerCase().indexOf(filter) >= 0;
    });
  }

  ngOnInit(): void {
    this._productService.getProducts()
    .subscribe(
      products=> {
        this.products = products;
        this.filteredProducts = this.products;
      },
      err=> this.errorMessage = <any>err
    );

   };

  onNotify(e: string): void {
    console.log('event', e);
  };
}
