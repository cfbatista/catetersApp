import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManipulacaoPageRoutingModule } from './manipulacao-routing.module';

import { ManipulacaoPage } from './manipulacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManipulacaoPageRoutingModule
  ],
  declarations: [ManipulacaoPage]
})
export class ManipulacaoPageModule {}
