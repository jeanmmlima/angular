import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

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

  //FORMA 2 DE CONSTRUIIR FORM BUILDER
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) {

  }

  ngOnInit(): void {

    /*
    //FORMA 1 DE CONSTRUIR
    this.formulario = new FormGroup({
      //iniciando campos do form que são controles do formulario
      nome: new FormControl('null'), //valor inicial do campo
      email: new FormControl('null'),
    });
    */

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });

  }
  onSubmit(){
    console.log(this.formulario);
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));

  }


}
