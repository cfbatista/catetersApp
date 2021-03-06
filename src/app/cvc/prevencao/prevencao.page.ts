import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prevencao',
  templateUrl: './prevencao.page.html',
  styleUrls: ['./prevencao.page.scss'],
})
export class PrevencaoPage implements OnInit {

  passedId = null;
  constructor(
    private navParams : NavParams,
    private modalController : ModalController
    ) { }

  ngOnInit() {
    this.passedId = this.navParams.get('custom_id');
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
