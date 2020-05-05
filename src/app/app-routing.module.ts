import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth-routing.module#AuthRoutingModule'},
  {
    path: 'home',
    loadChildren: './pageTest/home-routing.module#HomeRoutingModule',
    canLoad: [ AuthGuard ]
  },
  {
    path: 'nao',
    loadChildren: () => import('./nao/nao.module').then( m => m.NaoPageModule)
  },
  {
    path: 'referencias',
    loadChildren: () => import('./referencias/referencias.module').then( m => m.ReferenciasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
