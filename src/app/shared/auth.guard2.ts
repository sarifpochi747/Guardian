import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../shared/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn === true) {
      this.router.navigate(['/menu'])
    }
    return true;
  }
}
