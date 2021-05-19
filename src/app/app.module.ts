import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { NotificationService } from 'services/notification.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/security/login/login.component';
import { LoginService } from 'services/login.service';
import { LoggedInGuard } from './components/security/loggendin.guard';
import { UserDetailComponent } from './components/header/user-detail/user-detail.component';
import { LeaveOrderGuard } from './components/order/order-leave.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './components/security/auth.interceptor';
import { ApplicationErrorHandler } from 'interceptors/error-interceptor';



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
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SharedModule
  ],
  providers: [
    CartService,
    RestaurantService,
    OrderService,
    NotificationService,
    LoginService,
    LoggedInGuard,
    LeaveOrderGuard,
    {provide: ErrorHandler, useClass: ApplicationErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
