import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  //variável que representa o formulário

  //todo código vai ficar no componente

  //variável que representa o formulário
  //todo código vai ficar no componente
  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
