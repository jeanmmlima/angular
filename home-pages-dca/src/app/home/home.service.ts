import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private usuarios: Usuario[] = [
    {id: 1, nome: 'Jean Lima', descricao:'Doutor em Engenharia e todo o resto'},
    {id: 2, nome: 'Usuario Dois', descricao:'Doutor em Engenharia e todo o resto II'},
    {id: 3, nome: 'Usuario Três', descricao:'Doutor em Engenharia e todo o resto III'}
  ];

  getUsuarios(){
    return this.usuarios;
  }

  getUsuario(id: number){
    for (let i = 0; i < this.usuarios.length; i++){
      let usuario = this.usuarios[i];
      if(usuario.id == id){
        return usuario;
      }
    }
    return null;
  }

  constructor() { }
}
