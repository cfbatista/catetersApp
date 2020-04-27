import { NgModule } from '@angular/core';
import { CvcPageRoutingModule } from './cvc-routing.module';

import { CvcPage } from './cvc.page';
import { PrevencaoPageModule } from './prevencao/prevencao.module';
import { IndicacaoPageModule } from './indicacao/indicacao.module';
import { ManipulacaoPageModule } from './manipulacao/manipulacao.module';
import { InsercaoPageModule } from './insercao/insercao.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NaoPageModule } from '../nao/nao.module';

@NgModule({
  imports: [
    SharedModule,
    CvcPageRoutingModule,
    PrevencaoPageModule,
    IndicacaoPageModule,
    ManipulacaoPageModule,
    InsercaoPageModule,
    NaoPageModule
  ],
  declarations: [
    CvcPage
  ]
})
export class CvcPageModule {}
