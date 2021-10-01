import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log("recebendo do usuario resolver!");
        this.usuario = info.usuario;
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}
