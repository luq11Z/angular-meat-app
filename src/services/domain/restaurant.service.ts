import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { Restaurant } from "models/restaurant.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Product } from "models/product.model";


@Injectable()
export class RestaurantService {

    constructor(private http: HttpClient) {}

    getRestaurants(search?: string) : Observable<Restaurant[]> {
        let params: HttpParams = undefined;
        if(search) {
            params = new HttpParams().set('q', search);
        }
        return this.http.get<Restaurant[]>(`${API_CONFIG.baseUrl}/restaurants`, {params: params});
    }

    getRestaurantById(id: string) : Observable<Restaurant>{
        return this.http.get<Restaurant>(`${API_CONFIG.baseUrl}/restaurants/${id}`)
    }

    getReviewsOfRestaurants(id: string) : Observable<any>{
        return this.http.get(`${API_CONFIG.baseUrl}/restaurants/${id}/reviews`);
    }

    getRestaurantMenu(id: string) : Observable<Product[]>{
        return this.http.get<Product[]>(`${API_CONFIG.baseUrl}/restaurants/${id}/menu`);
    }

}