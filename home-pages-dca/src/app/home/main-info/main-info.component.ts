import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  usuarios: any[] = [];
  usuario: any;

  constructor(
    private usuarioSerive: HomeService
  ) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioSerive.getUsuarios();
    this.usuario = this.usuarioSerive.getUsuario(1);
  }

}
