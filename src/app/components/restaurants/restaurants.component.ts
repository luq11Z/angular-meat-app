import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'models/restaurant.model';
import { RestaurantService } from 'services/restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restauranService: RestaurantService) {}

  ngOnInit() {
    this.restauranService.getRestaurants()
    .subscribe(response => {
      this.restaurants = response
    },
    error => {});
  }

}
