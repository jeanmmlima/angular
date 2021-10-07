import { Usuario } from './../home/usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Credenciais } from './credenciais';
import { HomeService } from '../home/home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  autenticarUsuarioEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private homeService: HomeService) { }

  fazerLogin(usr: Credenciais){
    if(this.homeService.authUsuario(usr)){
      this.usuarioAutenticado = true;

      this.autenticarUsuarioEmitter.emit(true);
      //home page
      this.router.navigate(['/home'])
    } else {
      this.usuarioAutenticado = false;
      this.autenticarUsuarioEmitter.emit(false);
    }

  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
