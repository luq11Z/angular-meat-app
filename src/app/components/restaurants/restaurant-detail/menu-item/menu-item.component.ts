import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'models/product.model';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-20px'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  
  @Input() product: Product;

  @Output() addProductToCart = new EventEmitter()

  menuItemState = 'ready';

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.addProductToCart.emit(this.product);
  }

}
