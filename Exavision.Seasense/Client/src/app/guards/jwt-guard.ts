import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateTokenResponse } from '../api/http/validate-token-response';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class JwtGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService, private httpService: HttpService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise<boolean | UrlTree>((resolve, reject) => {
      this.httpService.validateToken().subscribe({
        next: (response: ValidateTokenResponse) => {
          resolve(true);
        },
        error: (err: HttpErrorResponse) => {
          this.router.navigate(['/login'])
          reject(false);

        },
      });  
    });
     

    
  }
  
}
