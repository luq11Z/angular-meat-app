import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { CartItem } from "models/cart-tem.model";
import { Order } from "models/order.model";
import { Observable } from "rxjs/Observable";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService,
                private http: HttpClient) { }

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
        return this.http.post<Order>(`${API_CONFIG.baseUrl}/orders`, order)
                        .map(order => order.id);
    }

    clear() {
        this.cartService.clearCart();
    }

}