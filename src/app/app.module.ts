import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/shared/input/input.component';
import { RadioComponent } from './components/shared/radio/radio.component';
import { OrderItemsComponent } from './components/order/order-items/order-items.component';
import { OrderService } from 'services/domain/order.service';
import { DeliveryCostsComponent } from './components/order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './components/order/order-summary/order-summary.component';
import { RatingComponent } from './components/shared/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantInfoCardComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RestaurantService,
    CartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
