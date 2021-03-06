import { AuthService } from './../../login/auth.service';
import { HomeService } from './../home.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from './../usuario';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  inscricao!: Subscription;
  usuario: any;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: HomeService,
    private authService: AuthService

  ) { }

  ngOnInit(): void {


    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.usuario = this.usuarioService.getUsuario(id);

        if(this.usuario === null){
          this.usuario = {};
        }
      }
    );

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

  onInput(){
    this.formMudou = true;
    console.log("mudou!");
  }

  estadoAutenticacao(){
    return this.authService.usuarioEstaAutenticado();
  }

}
