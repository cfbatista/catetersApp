import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListaPage } from "./lista.page";
import { ComponentsModule } from '../components/components.module';
import { ListComponent } from '../components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListaPage
  }
];
@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPage],
  entryComponents: [ListComponent]
})
export class ListaPageModule {}
