import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaoPageRoutingModule } from './nao-routing.module';

import { NaoPage } from './nao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaoPageRoutingModule
  ],
  declarations: [NaoPage]
})
export class NaoPageModule {}
