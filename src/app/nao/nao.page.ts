import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nao',
  templateUrl: './nao.page.html',
  styleUrls: ['./nao.page.scss'],
})
export class NaoPage implements OnInit {

  constructor(
    public modalController: ModalController) { }


  async close(){
    return await this.modalController.dismiss();
  }

  ngOnInit(){}
}
