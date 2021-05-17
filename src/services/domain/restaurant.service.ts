import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_CONFIG } from "config/api.config";
import { Restaurant } from "models/restaurant.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Product } from "models/product.model";


@Injectable()
export class RestaurantService {

    constructor(private http: Http) {}

    getRestaurants(search?: string) : Observable<Restaurant[]> {
        return this.http.get(`${API_CONFIG.baseUrl}/restaurants`, {params: {q: search}})
        .map(response => response.json());
    }

    getRestaurantById(id: string) : Observable<Restaurant>{
        return this.http.get(`${API_CONFIG.baseUrl}/restaurants/${id}`)
        .map(response => response.json());
    }

    getReviewsOfRestaurants(id: string) : Observable<any>{
        return this.http.get(`${API_CONFIG.baseUrl}/restaurants/${id}/reviews`)
        .map(response => response.json());
    }

    getRestaurantMenu(id: string) : Observable<Product[]>{
        return this.http.get(`${API_CONFIG.baseUrl}/restaurants/${id}/menu`)
        .map(response => response.json());
    }

}