import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantInfoCardComponent } from './components/restaurants/restaurant-info-card/restaurant-info-card.component';
import { RestaurantDetailComponent } from './components/restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurants/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './components/restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './components/restaurants/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurants/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './components/order/order-summary/order-summary.component';
import { SharedModule } from './components/shared/shared.module';
import { CartService } from 'services/domain/cart.service';
import { RestaurantService } from 'services/domain/restaurant.service';
import { OrderService } from 'services/domain/order.service';



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
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SharedModule
  ],
  providers: [
    CartService,
    RestaurantService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
