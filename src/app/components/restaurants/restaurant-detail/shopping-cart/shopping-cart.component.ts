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

  total() : number {
    return this.cartService.total();
  }

}
