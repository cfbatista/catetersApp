import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { PopoverComponent } from './popover/popover.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ItemComponent,
    PopoverComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ItemComponent,
    PopoverComponent
  ]
})
export class ComponentsModule { }
