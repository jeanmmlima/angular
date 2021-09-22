
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
        'is-invalid': this.verificaValidTouched(campo),
        'is-valid': campo.valid && campo.touched
    }
  }

  onSubmit(form: any){

    //console.log(form.value);
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));

  }

  consultaCEP(cep: any, form: any){
    console.log(cep);
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.resetaDadosForm(form);

        //chamada get via HTTP - precisa utilizar o Http
        //para isso precisa INJETAR o Http
        let headers = new HttpHeaders({
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          });

        let url = "//viacep.com.br/ws/"+ cep +"/json/"

        this.http.get(url, {headers: headers})
          .pipe(map(dados =>  dados))
          //.subscribe(dados => console.log(dados));
          .subscribe(dados => this.populaDadosForm(dados,form));
      }
    }
  }

  populaDadosForm(dados: any, formulario: any){
    //setValue vi resetar todos os campos antes de preencher os novos
    /*
    formulario.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/
    //arremendo só nos atributos que qeuro
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        //numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });


  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        //numero: '',
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
