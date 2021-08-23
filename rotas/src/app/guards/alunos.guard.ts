import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean>| boolean {

    console.log(route);
    console.log(state);

    //nao vai deixar usuario acessar a rota filha de alunos
    //que é editar!!

    /* aqui tbm poderia injetar um serviço,
    como ir até o servidor e verificar o usuario
    logado tem acesso
    */

    console.log('AlunosGuard: Guarda de rota filha!');
    if(state.url.includes('editar')){
      //alert('Usuário sem acesso!')
      //return of(false);
    }

    return true;
  }

}
