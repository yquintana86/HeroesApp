import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanMatch, CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

private checkAuthStatus(): boolean | Observable<boolean>{
return this.authService.checkAuthentication()
      .pipe(
        tap(isAutheticated =>{
            if(isAutheticated)
              this.router.navigate(['./'])
        }),
        map(isAutheticated => !isAutheticated)
      );
}


canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean>{
return this.checkAuthStatus();
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
return this.checkAuthStatus();
}
}
