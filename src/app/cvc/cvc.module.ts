import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvcPageRoutingModule } from './cvc-routing.module';

import { CvcPage } from './cvc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvcPageRoutingModule
  ],
  declarations: [CvcPage]
})
export class CvcPageModule {}
