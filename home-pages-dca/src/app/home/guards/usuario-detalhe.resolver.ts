import { HomeService } from './../home.service';
import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioDetalheResolver implements Resolve<Usuario> {

  constructor(private usuarioService: HomeService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<any>|Promise<any>|any {

    console.log("usuario resolver!");

    let id = route.params['id'];

    return this.usuarioService.getUsuario(id);
  }
}
