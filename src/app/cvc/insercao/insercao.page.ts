import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.page.html',
  styleUrls: ['./insercao.page.scss'],
})
export class InsercaoPage implements OnInit {

  constructor(public navParams: NavParams,public modalController:ModalController) { }

  passedId = null;
  ngOnInit() {
    this.passedId = this.navParams.get('custom_id');
  }

  async closeModal(){
    return await this.modalController.dismiss();
  }

}
