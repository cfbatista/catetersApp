import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.page.html',
  styleUrls: ['./insercao.page.scss'],
})
export class InsercaoPage implements OnInit {

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
