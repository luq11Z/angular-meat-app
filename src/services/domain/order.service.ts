import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { API_CONFIG } from "config/api.config";
import { CartItem } from "models/cart-tem.model";
import { Order } from "models/order.model";
import { Observable } from "rxjs/Observable";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService,
                private http: Http) { }

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

    itemsTotal() : number {
        return this.cartService.total();
    }

    checkout(order: Order) : Observable<string>{
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${API_CONFIG.baseUrl}/orders`, 
        JSON.stringify(order),
        new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(order => order.id);
    }

    clear() {
        this.cartService.clearCart();
    }

}