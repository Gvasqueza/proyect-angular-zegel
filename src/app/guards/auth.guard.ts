import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.usuarioAutenticado$.pipe(
      delay(100),  // Retrasa la verificación del BehaviorSubject
      map(usuarioAutenticado => usuarioAutenticado ? true : this.router.parseUrl('/login'))
    );
  }
};