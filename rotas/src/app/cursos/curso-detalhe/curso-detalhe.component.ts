import { CursosService } from '../cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  /*
  Injetar dependendcia de
  ActivatedRoute para ter acesso aos parâmetros
  vindos das rotas!!!

  */
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
    ) {
    /*
    this.id = this.route.snapshot.params['id'];
    console.log(this.route);

    snapshot só pera a primeira passagem de parâmetro
    para ficar OUVINDO a mudança de parametros
    é preciso usar os life hooks
    */
  }

  ngOnInit(): void {
    //nos inscreve nas mudanças de parametros
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
    this.id = params['id'];

    this.curso = this.cursosService.getCurso(this.id);
    if(this.curso == null){
      //redireciona a rota
      this.router.navigate(['/cursos/naoEncontrado'])
    }
    });
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}
