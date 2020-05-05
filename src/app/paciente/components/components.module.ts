import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ ListComponent ],
  imports: [
    SharedModule
  ],
  exports: [
    ListComponent
  ]
})
export class ComponentsModule { }
