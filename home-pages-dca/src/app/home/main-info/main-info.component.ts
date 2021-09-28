import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  usuario: any;

  constructor(
    private usuarioSerive: HomeService
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioSerive.getUsuario(1);
  }

}
