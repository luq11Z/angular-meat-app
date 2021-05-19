import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'models/restaurant.model';
import { RestaurantService } from 'services/domain/restaurant.service';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"

      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *',  animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  restaurants: Restaurant[];
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restauranService: RestaurantService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchControl = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(searchTerm => 
      this.restauranService.getRestaurants(searchTerm)
      .catch(error => Observable.from([])))
      .subscribe(restaurants => 
        this.restaurants = restaurants
      )

    this.restauranService.getRestaurants()
    .subscribe(response => {
      this.restaurants = response
    },
    error => {});
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
