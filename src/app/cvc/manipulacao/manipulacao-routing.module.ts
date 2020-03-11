import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManipulacaoPage } from './manipulacao.page';

const routes: Routes = [
  {
    path: '',
    component: ManipulacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManipulacaoPageRoutingModule {}
