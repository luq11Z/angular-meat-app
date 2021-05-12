import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'models/restaurant.model';

@Component({
  selector: 'mt-restaurant-info-card',
  templateUrl: './restaurant-info-card.component.html'
})
export class RestaurantInfoCardComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
