import { NgModule } from '@angular/core';


import { CadastroPage } from './cadastro.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPageRoutingModule } from './cadastro-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
