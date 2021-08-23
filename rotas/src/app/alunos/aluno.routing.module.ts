import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver'
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { CanActivateChild, CanDeactivate } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const alunosRoutes = [
  /*normal
  {path: 'alunos',component: AlunosComponent},
  //harcoded declarado primeiro
  {path: 'alunos/novo', component: AlunoFormComponent},
  {path: 'alunos/:id', component: AlunoDetalheComponent},
  {path: 'alunos/:id/editar', component: AlunoFormComponent}
  */
 //rotas filhas
  //renderiza os dois componetes (rota principal e as filhas)
  {path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard],
  children: [
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent,
      resolve: { aluno: AlunoDetalheResolver } //resolve a rota ANTES de carregar o componente
  },
    {path: ':id/editar', component: AlunoFormComponent,
      canDeactivate:[AlunosDeactivateGuard]}
  ]}
];

@NgModule({
    imports:[
      RouterModule.forChild(alunosRoutes)
    ],
    exports:[
      RouterModule
    ]
})

export class AlunosRoutingModule {}
