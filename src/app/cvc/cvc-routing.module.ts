import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvcPage } from './cvc.page';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [ AuthGuard ],
    component: CvcPage
  },
  {
    path: 'prevencao',
    loadChildren: () => import('./prevencao/prevencao.module').then( m => m.PrevencaoPageModule)
  },
  {
    path: 'manipulacao',
    loadChildren: () => import('./manipulacao/manipulacao.module').then( m => m.ManipulacaoPageModule)
  },
  {
    path: 'indicacao',
    loadChildren: () => import('./indicacao/indicacao.module').then( m => m.IndicacaoPageModule)
  },
  {
    path: 'insercao',
    loadChildren: () => import('./insercao/insercao.module').then( m => m.InsercaoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CvcPageRoutingModule {}
