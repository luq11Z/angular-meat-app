import { Component, OnInit } from '@angular/core';
import { CartService } from 'services/domain/cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {

  }

  getItems() : any[] {
    return this.cartService.items;
  }

  addItem(item: any) {
    this.cartService.addItem(item);
  }

  removeItem(item: any) {
    return this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clearCart();
  }

  total() : number {
    return this.cartService.total();
  }

}
