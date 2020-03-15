import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';
import { ModalController, PopoverController } from '@ionic/angular';
import { CvcPage } from 'src/app/cvc/cvc.page';
import { CvdPage } from 'src/app/cvv/cvd.page';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.page.html',
  styleUrls: ['./home-list.page.scss'],
})
export class HomeListPage implements OnInit {

  home$ : Observable<Item[]>;

  constructor(
    public modalController : ModalController,
    public popoverController: PopoverController) { }

  ngOnInit() : void{
    this.home$ = of([
      { id: '', title: 'teste', done: false}
    ]);
  }

  async openCVC(){
    const modal = await this.modalController.create({
      component: CvcPage
    });
    return await modal.present();
  }

  async openCVD(){
    const modal = await this.modalController.create({
      component: CvdPage
    });
    return await modal.present();
  }

  async openPopover(en: any){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: en,
      translucent: true
    });
    return await popover.present();
  }
}
