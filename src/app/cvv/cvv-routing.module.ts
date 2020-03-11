import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvvPage } from './cvv.page';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [ AuthGuard ],
    component: CvvPage
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
    path: 'insercao',
    loadChildren: () => import('./insercao/insercao.module').then( m => m.InsercaoPageModule)
  },
  {
    path: 'indicacao',
    loadChildren: () => import('./indicacao/indicacao.module').then( m => m.IndicacaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvvPageRoutingModule {}
