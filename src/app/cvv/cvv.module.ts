import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvvPageRoutingModule } from './cvv-routing.module';

import { CvvPage } from './cvv.page';
import { PrevencaoPage } from './prevencao/prevencao.page';
import { IndicacaoPage } from './indicacao/indicacao.page';
import { ManipulacaoPage } from './manipulacao/manipulacao.page';
import { InsercaoPage } from './insercao/insercao.page';
import { PrevencaoPageModule } from './prevencao/prevencao.module';
import { IndicacaoPageModule } from './indicacao/indicacao.module';
import { ManipulacaoPageModule } from './manipulacao/manipulacao.module';
import { InsercaoPageModule } from './insercao/insercao.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvvPageRoutingModule,
    PrevencaoPageModule,
    IndicacaoPageModule,
    ManipulacaoPageModule,
    InsercaoPageModule
  ],
  declarations: [CvvPage]
})
export class CvvPageModule {}
