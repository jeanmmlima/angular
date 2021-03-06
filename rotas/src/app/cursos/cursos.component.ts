import { Subscription, timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    //behavior subject que tbm retorna uma inscrição
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
      this.pagina++;
      this.router.navigate(['/cursos'],{
        queryParams:{'pagina':this.pagina}
      });


  }




}
