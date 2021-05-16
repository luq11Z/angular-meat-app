import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'models/restaurant.model';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-restaurant-info-card',
  templateUrl: './restaurant-info-card.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantInfoCardComponent implements OnInit {

  @Input() 
  restaurant: Restaurant;
  restaurantState = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
