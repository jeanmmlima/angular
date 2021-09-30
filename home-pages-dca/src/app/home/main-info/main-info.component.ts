import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  usuarios: any[] = [];
  usuario: any;

  constructor(
    //private route: ActivatedRoute,
    private usuarioSerive: HomeService,
    //private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioSerive.getUsuarios();
    this.usuario = this.usuarioSerive.getUsuario(1);
  }

/*  renUsuario(){
    this.router.navigate(['/home',this.usuario.id]);
  }
*/
}
