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
        loadChildren: './home-list/home-list.module#HomeListPageModule'
      },
      {
        path: 'sobre',
        loadChildren: '../slides/slides.module#SlidesPageModule'
      },
      {
        path: 'op/cvd',
        loadChildren: '../cvv/cvd.module#CvdPageModule'
      },
      {
        path: 'op/cvc',
        loadChildren: '../cvc/cvc.module#CvcPageModule'
      },
      {
        path: 'op/pacientes',
        loadChildren: '../paciente/lista/lista.module#ListaPageModule'
      },
      {
        path: 'op/cadastro',
        loadChildren: '../paciente/cadastro/cadastro.module#CadastroPageModule'
      },
      {
        path: 'op/nao',
        loadChildren: '../nao/nao.module#NaoPageModule'
      },
      {
        path: 'op/refe',
        loadChildren: '../referencias/referencias.module#ReferenciasPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
