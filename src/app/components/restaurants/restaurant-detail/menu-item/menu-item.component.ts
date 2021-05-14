import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'models/product.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  
  @Input() product: Product;

  @Output() addProductToCart = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.addProductToCart.emit(this.product);
  }

}
