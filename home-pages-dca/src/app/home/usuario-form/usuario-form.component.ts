import { HomeService } from './../home.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from './../usuario';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  inscricao!: Subscription;
  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: HomeService

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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}
