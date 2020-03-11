import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsercaoPage } from './insercao.page';

const routes: Routes = [
  {
    path: '',
    component: InsercaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsercaoPageRoutingModule {}
