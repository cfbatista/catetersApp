import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-indicacao',
  templateUrl: './indicacao.page.html',
  styleUrls: ['./indicacao.page.scss'],
})
export class IndicacaoPage implements OnInit {

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
