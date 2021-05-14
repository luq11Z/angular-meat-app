import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'models/product.model';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from 'services/domain/restaurant.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<Product[]>;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService.getRestaurantMenu(this.route.parent.snapshot.params['id']); 
  }

  addProduct(product: Product) {
    console.log(product);
  }

}
