import { SharedModule } from './../shared/shared.module';

import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from '../shared/campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TemplateFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, //deve ser importado toda vez que for ser trabalhodo
    HttpClientModule,
    SharedModule
    //formularios
  ]
})
export class TemplateFormModule { }
