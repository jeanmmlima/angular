import { IFormCanDeactivate } from './iform-candeactivate';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
//export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {


  canDeactivate(
    //component: AlunoFormComponent,
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    console.log("guarda de desativação!")
    //se o form mudou nao consigo desativar a rota!
    //return component.podeMudarRote();
    return component.podeDesativar();
  }
}
