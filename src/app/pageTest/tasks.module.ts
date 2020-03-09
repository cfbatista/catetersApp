import { NgModule } from '@angular/core';

import { TasksRoutingModule } from './tasks-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { TaskListPage } from './task-list/task-list.page';


@NgModule({
  declarations: [],
  imports: [
    TasksRoutingModule
  ]
})
export class TasksModule {

  tabHomeSelect(){
    console.log('lala');
  }
}
