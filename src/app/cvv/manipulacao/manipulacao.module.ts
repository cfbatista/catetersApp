import { NgModule } from '@angular/core';
import { ManipulacaoPageRoutingModule } from './manipulacao-routing.module';

import { ManipulacaoPage } from './manipulacao.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ManipulacaoPageRoutingModule
  ],
  declarations: [ManipulacaoPage]
})
export class ManipulacaoPageModule {}
