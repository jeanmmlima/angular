import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../home/usuario';

@Component({
  selector: 'app-side-info',
  templateUrl: './side-info.component.html',
  styleUrls: ['./side-info.component.scss']
})
export class SideInfoComponent implements OnInit {

  @Input() usuario!: Usuario

  constructor() { }

  ngOnInit(): void {
  }

}
