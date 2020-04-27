import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoPage } from './nao.page';

const routes: Routes = [
  {
    path: '',
    component: NaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaoPageRoutingModule {}
