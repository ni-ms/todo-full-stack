import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {HardcodedAuthService} from "./hardcoded-auth.service";

@Injectable({
  providedIn: 'root'
})
class RouteGaurdPermissionService {
  constructor( private router: Router) { }
  hardCodedAuthService = inject(HardcodedAuthService);
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.hardCodedAuthService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

export const RouteGaurdService: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(RouteGaurdPermissionService).canActivate(next, state);
}
