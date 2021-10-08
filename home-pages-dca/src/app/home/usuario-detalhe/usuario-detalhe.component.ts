import { AuthService } from './../../login/auth.service';
import { HomeService } from './../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss']
})
export class UsuarioDetalheComponent implements OnInit {

  usuario!: Usuario;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: HomeService,
    private router: Router,
    private authService: AuthService

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

  editarUsuario(){
    this.router.navigate(['/home',this.usuario.id,'editar']);
  }

  estadoAutenticacao(){
    return this.authService.usuarioEstaAutenticado();
  }

}
