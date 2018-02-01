import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from '@angular/core/src/event_emitter';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StartComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }

  onClick(): void {
    this.notify.emit('Clicked'); 
  }
}
