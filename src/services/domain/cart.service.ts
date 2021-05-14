import { CartItem } from "models/cart-tem.model";
import { Product } from "models/product.model";

export class CartService {

    items: CartItem[] = [];
    
    clearCart() {
        this.items = [];
    }

    addItem(item: Product) {
        let hasItem = this.items.find(x => x.product.id === item.id);
        if(hasItem) {
            hasItem.quantity++; 
        }
        else {
            this.items.push(new CartItem(item));
        }
    }   

    removeItem(item: any) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total() : number{
        return this.items.map(item => item.subTotal())
        .reduce((prev, subTotal) => prev + subTotal, 0);
    }
}