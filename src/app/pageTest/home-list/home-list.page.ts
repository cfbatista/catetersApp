import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.page.html',
  styleUrls: ['./home-list.page.scss'],
})
export class HomeListPage implements OnInit {

  home$ : Observable<Item[]>;

  constructor(
    public popoverController: PopoverController) { }

  ngOnInit() : void{
    this.home$ = of([
      { id: '', title: 'teste', done: false}
    ]);
  }

  async openPopover(en: any){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: en,
      translucent: true,
      cssClass: 'popoverClass'
    });
    return await popover.present();
  }
}
