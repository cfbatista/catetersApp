import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-indicacao',
  templateUrl: './indicacao.page.html',
  styleUrls: ['./indicacao.page.scss'],
})
export class IndicacaoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal(){
    return await this.modalController.dismiss();  
  }

}
