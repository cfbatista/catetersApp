import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivateChild: [ AuthGuard ],
    children: [
      {
        path: '',
        loadChildren: './task-list/task-list.module#TaskListPageModule',
      },
      // {
      //   path: 'home',
      //   loadChildren: '../task-list/task-list.module#TaskListPageModule'
      // },
      {
        path: 'sobre',
        loadChildren: '../slides/slides.module#SlidesPageModule'
      },
      {
        path: 'cvd',
        loadChildren: '../cvv/cvv.module#CvvPageModule'
      },
      {
        path: 'cvc',
        loadChildren: '../cvc/cvc.module#CvcPageModule'
      },
      {
        path: 'pacientes',
        loadChildren: '../paciente/lista/lista.module#ListaPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
