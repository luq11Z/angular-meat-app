import { Component, OnInit } from '@angular/core';
import { CartItem } from 'models/cart-tem.model';
import { Order, OrderItem } from 'models/order.model';
import { OrderService } from 'services/domain/order.service';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  deliveryCosts: number = 4.50;


  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];
 
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems() : CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQuantity(item: CartItem) {
    this.orderService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.orderService.decreaseQuantity(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itemsTotal() : number {
    return this.orderService.itemsTotal();
  }

  checkout(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.product.id));
    this.orderService.checkout(order).subscribe((orderId: string) => {
      console.log(`Compra concluída: ${orderId}`);
      this.orderService.clear();
    })
    console.log(order);
  }

}
