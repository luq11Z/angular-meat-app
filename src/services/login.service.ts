import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { API_CONFIG } from "config/api.config";
import { User } from "models/user.model";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {

    user: User;
    lastUrl: string;

    constructor(private http: HttpClient,
                private router: Router) {
                    this.router.events.filter(event => event instanceof NavigationEnd)
                    .subscribe((event: NavigationEnd) => {
                        this.lastUrl = event.url;
                    });
                }

    isLoggedIn() : boolean {
        return this.user !== undefined;
    }

    login(email: string, password: string) : Observable<User> {
        return this.http.post<User>(`${API_CONFIG.baseUrl}/login`, {
            email: email, 
            password: password
        })
        .do(response => this.user = response
        );
    }

    logout() {
        this.user = undefined;
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)]);
    }

}