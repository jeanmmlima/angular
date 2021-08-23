import { AuthService } from './../login/auth.service';
import { CanLoad, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('AuthGuard!');

   return this.verificarAcesso();
  }

  private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login'])
    return false;
  }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('AuthGuardCanLoad! Verificando se usuário pode carregar codigo do módulo');

      return this.verificarAcesso();
    }
}
