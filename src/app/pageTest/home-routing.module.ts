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
        loadChildren: './start/start.module#StartPageModule'
      },
      {
        path: 'op',
        loadChildren: './home-list/home-list.module#HomeListPageModule',
      },
      {
        path: 'sobre',
        loadChildren: '../slides/slides.module#SlidesPageModule'
      },
      {
        path: 'cvd',
        loadChildren: '../cvv/cvd.module#CvdPageModule'
      },
      {
        path: 'cvc',
        loadChildren: '../cvc/cvc.module#CvcPageModule'
      },
      {
        path: 'pacientes',
        loadChildren: '../paciente/lista/lista.module#ListaPageModule'
      },
      {
        path: 'cadastro',
        loadChildren: '../paciente/cadastro/cadastro.module#CadastroPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
