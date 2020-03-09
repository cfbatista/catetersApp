import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvcPage } from './cvc.page';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [ AuthGuard ],
    component: CvcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvcPageRoutingModule {}
