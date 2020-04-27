import { NgModule } from '@angular/core';

import { CvdPageRoutingModule } from './cvd-routing.module';

import { CvdPage } from './cvd.page';
import { PrevencaoPageModule } from './prevencao/prevencao.module';
import { IndicacaoPageModule } from './indicacao/indicacao.module';
import { ManipulacaoPageModule } from './manipulacao/manipulacao.module';
import { InsercaoPageModule } from './insercao/insercao.module';
import { SharedModule } from '../shared/shared.module';
import { NaoPageModule } from '../nao/nao.module';

@NgModule({
  imports: [
    SharedModule,
    CvdPageRoutingModule,
    PrevencaoPageModule,
    IndicacaoPageModule,
    ManipulacaoPageModule,
    InsercaoPageModule,
    NaoPageModule
  ],
  declarations: [CvdPage]
})
export class CvdPageModule {}
