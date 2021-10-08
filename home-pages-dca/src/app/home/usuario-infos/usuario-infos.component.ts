import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import * as M from "materialize-css";


@Component({
  selector: 'app-usuario-infos',
  templateUrl: './usuario-infos.component.html',
  styleUrls: ['./usuario-infos.component.scss']
})
export class UsuarioInfosComponent implements OnInit {

  usuario!: Usuario;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: HomeService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log("recebendo do usuario resolver!");
        this.usuario = info.usuario;
      }
    )
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    $('#descricao').val(this.usuario.descricao);
    M.textareaAutoResize($('#descricao'));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  onSubmit(form: any){

    //console.log(form.value);
    console.log("clicou!")
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));

  }

  onCancel(){
    this.router.navigate(['/home',this.usuario.id]);
  }


}
