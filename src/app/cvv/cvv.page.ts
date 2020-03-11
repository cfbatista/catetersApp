import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrevencaoPage } from './prevencao/prevencao.page';
import { IndicacaoPage } from './indicacao/indicacao.page';
import { InsercaoPage } from './insercao/insercao.page';
import { ManipulacaoPage } from './manipulacao/manipulacao.page';

@Component({
  selector: 'app-cvv',
  templateUrl: './cvv.page.html',
  styleUrls: ['./cvv.page.scss'],
})
export class CvvPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openPrevencaoModal(){
    const modal = await this.modalController.create({
      component: PrevencaoPage
    });
    console.log("aqui");
    return await modal.present();
  }

  async openIndicacaoModal(){
    const modal = await this.modalController.create({
      component: IndicacaoPage
    });
    return await modal.present();
  }

  async openInsercaoModal(){
    const modal = await this.modalController.create({
      component: InsercaoPage
    });
    return await modal.present();
  }

  async openManipulacaoModal(){
    const modal = await this.modalController.create({
      component: ManipulacaoPage
    });
    return await modal.present();
  }
}
