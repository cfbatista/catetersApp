import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvcPage } from './cvc.page';

const routes: Routes = [
  {
    path: '',
    component: CvcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvcPageRoutingModule {}
