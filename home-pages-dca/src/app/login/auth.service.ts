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


  private id: any;
  autenticarUsuarioEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private homeService: HomeService,
   ) { }

  /*
  fazerLogin(usr: Credenciais){
    if(this.homeService.authUsuario(usr)){
      this.usuarioAutenticado = true;
      this.user =

      this.autenticarUsuarioEmitter.emit(true);
      //home page
      this.router.navigate(['/home'])
    } else {
      this.usuarioAutenticado = false;
      this.autenticarUsuarioEmitter.emit(false);
    }

  }*/

  fazerLogin(usr: Credenciais){
    this.id = this.homeService.authUsuario(usr);
    if(this.id != null){
      this.usuarioAutenticado = true;
      this.autenticarUsuarioEmitter.emit(true);
      //home page
      this.router.navigate(['/home/'+this.id]);
    } else {
      this.usuarioAutenticado = false;
      this.autenticarUsuarioEmitter.emit(false);
    }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  getUsuarioLogado(){
    return this.id;
  }

}
