import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { MenuComponent } from "./components/restaurants/restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./components/restaurants/restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./components/restaurants/restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./components/restaurants/restaurants.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
     children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
     ]},
    {path: 'restaurants/:id', component: RestaurantDetailComponent}
]