import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantInfoCardComponent } from './components/restaurants/restaurant-info-card/restaurant-info-card.component';
import { RestaurantService } from 'services/domain/restaurant.service';
import { RestaurantDetailComponent } from './components/restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurants/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './components/restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './components/restaurants/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurants/restaurant-detail/reviews/reviews.component';
import { CartService } from 'services/domain/cart.service';
import { OrderComponent } from './components/order/order.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/util/input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantInfoCardComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    RestaurantService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
