import { Injectable } from "@angular/core";
import { CartItem } from "models/cart-tem.model";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService) { }

    cartItems() : CartItem[] {
        return this.cartService.items;
    }

    increaseQuantity(item: CartItem) {
        this.cartService.increaseQuantity(item);
    }

    decreaseQuantity(item: CartItem) {
        this.cartService.decreaseQuantity(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

}