import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <h1>Welcome to {{title}}!!</h1>
  <pm-products></pm-products>
  </div>
  `,

  providers: [ProductService]
})

export class AppComponent {
  title: String = 'ACME: Product Inventory';
}
