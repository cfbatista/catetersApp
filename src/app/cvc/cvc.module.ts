import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvcPageRoutingModule } from './cvc-routing.module';

import { CvcPage } from './cvc.page';
import { PrevencaoPageModule } from './prevencao/prevencao.module';
import { IndicacaoPageModule } from './indicacao/indicacao.module';
import { ManipulacaoPageModule } from './manipulacao/manipulacao.module';
import { InsercaoPageModule } from './insercao/insercao.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvcPageRoutingModule,
    PrevencaoPageModule,
    IndicacaoPageModule,
    ManipulacaoPageModule,
    InsercaoPageModule
  ],
  declarations: [
    CvcPage
  ]
})
export class CvcPageModule {}
