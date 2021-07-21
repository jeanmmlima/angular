import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  //aqui vai o código javascript que implementa
  //as funcionalidades do componente!

  //tipagem no typescript varivel: tipo
  nomePortal: string;

  //cursos: string[] = ['Java','Ext JS', 'Angular'];
  //para ter acesso ao vetor cursos na view (html)
  //utiliza-se a diretiva ngFor

  cursos: string[];
  //injeção de dependencia do serviço via construtor
  //private ou public para declarar variave
  constructor(private cursosService: CursosService){
    //this para chamar variáveis da classe
    this.nomePortal = 'http://www.dca.ufrn.br/~jean';

    //como acessar essa variável na VIEW do component?
    // inserir na view (html): {{nome_variavel}}

    //instacia da classe de servicos
    //var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();

  }
  ngOnInit(){

  }

}
