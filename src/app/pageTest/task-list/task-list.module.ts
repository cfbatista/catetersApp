import { NgModule } from '@angular/core';

import { TaskListPageRoutingModule } from './task-list-routing.module';

import { TaskListPage } from './task-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { PopoverComponent } from '../components/popover/popover.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    TaskListPageRoutingModule
  ],
  declarations: [TaskListPage],
  entryComponents: [ PopoverComponent]
})
export class TaskListPageModule {}
