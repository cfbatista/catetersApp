import { NgModule } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { PopoverComponent } from './popover/popover.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ TaskItemComponent, PopoverComponent  ],
  imports: [
    SharedModule
  ],
  exports: [
    TaskItemComponent,
    PopoverComponent
  ]
})
export class ComponentsModule { }
