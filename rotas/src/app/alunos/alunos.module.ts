import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './aluno.routing.module';

@NgModule({
  declarations: [ AlunosComponent, AlunoFormComponent, AlunoDetalheComponent ],
  imports: [ CommonModule, AlunosRoutingModule, FormsModule],
  exports: [],
  providers: [AlunosService,AlunosDeactivateGuard, AlunoDetalheResolver],
})
export class AlunosModule {}
