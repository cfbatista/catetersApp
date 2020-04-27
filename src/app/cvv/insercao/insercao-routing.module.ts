import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { InsercaoPage } from './insercao.page';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [ AuthGuard ],
    component: InsercaoPage
    // children: [
    //   {
    //     path: 'op/cvc/insercao',
    //     loadChildren: '../cvc/insercao/insercao.module#InsercaoPageModule'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsercaoPageRoutingModule {}
