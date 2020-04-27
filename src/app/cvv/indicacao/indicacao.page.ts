import { Component, OnInit } from '@angular/core';
import { InsercaoPage } from '../insercao/insercao.page';
import { ManipulacaoPage } from '../manipulacao/manipulacao.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-indicacao',
  templateUrl: './indicacao.page.html',
  styleUrls: ['./indicacao.page.scss'],
})
export class IndicacaoPage implements OnInit {

  passedId = null;
  constructor(
    private modalController : ModalController
    ) { }

  ngOnInit() {
  }

  async closeModal(){
    return await this.modalController.dismiss();
  }

  async voltar(){
    return await this.modalController.dismiss();
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
