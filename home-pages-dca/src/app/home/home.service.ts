import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private usuarios: Usuario[] = [
    {id: 1, nome: 'Jean Mário Moreira de Lima', descricao:'Doutor em Engenharia Elétrica e de Computação (2021) pelo Programa de Pós Graduação em Engenharia Elétrica e de Computação (PPgEEC) da Universidade Federal do Rio Grande do Norte (UFRN). Mestre em Engenharia Mecatrônica (2018) pelo Programa de Pós Graduação em Engenharia Mecatrônica (PEM) da UFRN. É Engenheiro de Computação (2016) e Bacharel em Ciências e Tecnologia (2013), ambos pela UFRN. Também é Técnico em Automação Industrial (2015) pelo North Island College, Courtenay/BC, Canadá. Técnico em Informática pelo IFRN (2010). Atualmente, trabalha como Engenheiro de Computação do Departamento de Engenharia de Computação e Automação (DCA) da UFRN desde 2017. Área de pesquisa: Inteligência Artificial, Aprendizado de Máquina e Desenvolvimento de Sistemas.'},
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
