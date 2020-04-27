import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { CvcPage } from './cvc.page';
import { IndicacaoPage } from './indicacao/indicacao.page';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [ AuthGuard ],
    component: CvcPage,
    children: [
      {
        path: '/indicacao',
        loadChildren: '../cvc/indicacao/indicacao.module#IndicacaoPageModule'
      },
      {
        path: '/nao',
        loadChildren: '../nao/nao.module#NaoPageModule'
      }
    ]
  }
];

// const routes: Routes = [
//   {
//     path: '',
//     canActivateChild: [ AuthGuard ],
//     component: CvcPage
//   },
//   {
//     path: 'indicacao',
//     canActivateChild: [ AuthGuard ],
//     component: IndicacaoPage
//   }
// ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CvcPageRoutingModule {}
