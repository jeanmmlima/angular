import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo:'Learning JS',
    rating: 4.52123,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/jlqjpRP'
  };
  livros: string[] = ['Java','Angular 2'];

  public filtro: string;

  addCurso(curso: string){
    this.livros.push(curso);
    console.log(this.livros);
  }

  obterCurso(){
    if(this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() ===''){
      return this.livros;
    }

   return this.livros.filter(
     (v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) != -1){
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Valor assíncrono'),2000)
  });


  constructor() { this.filtro = '';}

  ngOnInit(): void {
  }

}

