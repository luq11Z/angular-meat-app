import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "services/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) {}

    isAuthenticated(path: string) : boolean {
        const loggedIn = this.loginService.isLoggedIn();
        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`);
        }
        return loggedIn;
    }

    canLoad(route: Route): boolean {
        return this.isAuthenticated(route.path);
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) : boolean {
        return this.isAuthenticated(activatedRoute.routeConfig.path);
    }
    
}