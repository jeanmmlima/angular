import { Usuario } from './../home/usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Credenciais } from './credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  autenticarUsuarioEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usr: Credenciais){
    if(usr.nome === 'usuario@email.com' &&
    usr.senha === '123456'){
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
