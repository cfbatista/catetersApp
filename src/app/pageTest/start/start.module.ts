import { NgModule } from '@angular/core';

import { StartRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StartRoutingModule
  ],
  declarations: [StartPage]
})
export class StartPageModule {}
