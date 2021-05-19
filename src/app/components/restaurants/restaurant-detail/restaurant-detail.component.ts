import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'models/restaurant.model';
import { RestaurantService } from 'services/domain/restaurant.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.getRestaurantById(this.route.snapshot.params['id'])
    .subscribe(response => {
      this.restaurant = response
    },
        error => {});
      }
  }
