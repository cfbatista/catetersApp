import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsercaoPageRoutingModule } from './insercao-routing.module';

import { InsercaoPage } from './insercao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsercaoPageRoutingModule
  ],
  declarations: [InsercaoPage]
})
export class InsercaoPageModule {}
