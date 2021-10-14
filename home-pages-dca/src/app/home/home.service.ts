import { Injectable } from '@angular/core';
import { Credenciais } from '../login/credenciais';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private usuarios: Usuario[] = [
    { id: 1,
      nome: 'Jean Mário Moreira de Lima',
      descricao:'Doutor em Engenharia Elétrica e de Computação (2021) pelo Programa de Pós Graduação em Engenharia Elétrica e de Computação (PPgEEC) da Universidade Federal do Rio Grande do Norte (UFRN). Mestre em Engenharia Mecatrônica (2018) pelo Programa de Pós Graduação em Engenharia Mecatrônica (PEM) da UFRN. É Engenheiro de Computação (2016) e Bacharel em Ciências e Tecnologia (2013), ambos pela UFRN. Também é Técnico em Automação Industrial (2015) pelo North Island College, Courtenay/BC, Canadá. Técnico em Informática pelo IFRN (2010). Atualmente, trabalha como Engenheiro de Computação do Departamento de Engenharia de Computação e Automação (DCA) da UFRN desde 2017. Área de pesquisa: Inteligência Artificial, Aprendizado de Máquina e Desenvolvimento de Sistemas.',
      email: 'jean@dca.ufrn.br',
      senha: '123456',
      contato: '(84) 3342-2231 222',
      estacao_trabalho: 'CTEC 217',
      link_lattes: 'http://lattes.cnpq.br/7467476735834560'
    },
    { id: 2,
      nome: 'Usuário 2',
      descricao:'Doutor em Engenharia Elétrica e de Computação (2021) pelo Programa de Pós Graduação em Engenharia Elétrica e de Computação (PPgEEC) da Universidade Federal do Rio Grande do Norte (UFRN). Mestre em Engenharia Mecatrônica (2018) pelo Programa de Pós Graduação em Engenharia Mecatrônica (PEM) da UFRN. É Engenheiro de Computação (2016) e Bacharel em Ciências e Tecnologia (2013), ambos pela UFRN. Também é Técnico em Automação Industrial (2015) pelo North Island College, Courtenay/BC, Canadá. Técnico em Informática pelo IFRN (2010). Atualmente, trabalha como Engenheiro de Computação do Departamento de Engenharia de Computação e Automação (DCA) da UFRN desde 2017. Área de pesquisa: Inteligência Artificial, Aprendizado de Máquina e Desenvolvimento de Sistemas.',
      email: 'user2@dca.ufrn.br',
      senha: '123456',
      contato: '(84) 3342-2231 222',
      estacao_trabalho: 'DCA 217',
      link_lattes: 'http://lattes.cnpq.br/7467476735834560'
    },
    { id: 3,
      nome: 'Usuário 3',
      descricao:'Doutor em Engenharia Elétrica e de Computação (2021) pelo Programa de Pós Graduação em Engenharia Elétrica e de Computação (PPgEEC) da Universidade Federal do Rio Grande do Norte (UFRN). Mestre em Engenharia Mecatrônica (2018) pelo Programa de Pós Graduação em Engenharia Mecatrônica (PEM) da UFRN. É Engenheiro de Computação (2016) e Bacharel em Ciências e Tecnologia (2013), ambos pela UFRN. Também é Técnico em Automação Industrial (2015) pelo North Island College, Courtenay/BC, Canadá. Técnico em Informática pelo IFRN (2010). Atualmente, trabalha como Engenheiro de Computação do Departamento de Engenharia de Computação e Automação (DCA) da UFRN desde 2017. Área de pesquisa: Inteligência Artificial, Aprendizado de Máquina e Desenvolvimento de Sistemas.',
      email: 'user3@dca.ufrn.br',
      senha: '123456',
      contato: '(84) 3342-2231 222',
      estacao_trabalho: 'DCA 218',
      link_lattes: 'http://lattes.cnpq.br/7467476735834560'
    },
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

  authUsuario(usr: Credenciais){
    for (let i = 0; i < this.usuarios.length; i++){
      let usuario = this.usuarios[i];
      if(usuario.email === usr.nome &&
        usuario.senha === usr.senha){
        return usuario.id;
      }
    }
    return null;
  }

  constructor() { }
}
