import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_CONFIG } from "config/api.config";
import { Restaurant } from "models/restaurant.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'


@Injectable()
export class RestaurantService {

    constructor(private http: Http) {}

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${API_CONFIG.baseUrl}/restaurants`)
        .map(response => response.json());
    }
}