import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicacaoPageRoutingModule } from './indicacao-routing.module';

import { IndicacaoPage } from './indicacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicacaoPageRoutingModule
  ],
  declarations: [IndicacaoPage]
})
export class IndicacaoPageModule {}
