import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { OrderSummaryComponent } from "./components/order/order-summary/order-summary.component";
import { MenuComponent } from "./components/restaurants/restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./components/restaurants/restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./components/restaurants/restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./components/restaurants/restaurants.component";
import { LoggedInGuard } from "./components/security/loggendin.guard";
import { LoginComponent } from "./components/security/login/login.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about', loadChildren: './components/about/about.module#AboutModule'},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
     children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
     ]},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'order', loadChildren: './components/order/order.module#OrderModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: '**', component: NotFoundComponent}
]