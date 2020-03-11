import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-manipulacao',
  templateUrl: './manipulacao.page.html',
  styleUrls: ['./manipulacao.page.scss'],
})
export class ManipulacaoPage implements OnInit {

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
