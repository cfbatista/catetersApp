import { NgModule } from '@angular/core';
import { InsercaoPageRoutingModule } from './insercao-routing.module';

import { InsercaoPage } from './insercao.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    InsercaoPageRoutingModule
  ],
  declarations: [InsercaoPage]
})
export class InsercaoPageModule {}
