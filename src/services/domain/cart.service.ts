import { CartItem } from "models/cart-tem.model";
import { Product } from "models/product.model";

export class CartService {

    items: CartItem[] = [];
    
    addItem(item: Product) {
        let hasItem = this.items.find(x => x.product.id === item.id);
        if(hasItem) {
            this.increaseQuantity(hasItem); 
        }
        else {
            this.items.push(new CartItem(item));
        }
    }
    
    increaseQuantity(item: CartItem) {
        item.quantity++;
    }

    removeItem(item: any) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    decreaseQuantity(item: CartItem) {
        item.quantity--;
        if(item.quantity <= 0) {
            this.removeItem(item);
        }
    }

    clearCart() {
        this.items = [];
    }

    total() : number{
        return this.items.map(item => item.subTotal())
        .reduce((prev, subTotal) => prev + subTotal, 0);
    }
}