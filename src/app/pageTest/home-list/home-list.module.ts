import { NgModule } from '@angular/core';

import { HomeListPageRoutingModule } from './home-list-routing.module';

import { HomeListPage } from './home-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { PopoverComponent } from '../components/popover/popover.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    HomeListPageRoutingModule
  ],
  declarations: [HomeListPage],
  entryComponents: [ PopoverComponent]
})
export class HomeListPageModule {}
