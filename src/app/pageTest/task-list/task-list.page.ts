import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
import { ModalController, PopoverController } from '@ionic/angular';
import { CvcPage } from 'src/app/cvc/cvc.page';
import { CvvPage } from 'src/app/cvv/cvv.page';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  tasks$ : Observable<Task[]>;

  constructor(public modalController : ModalController, public popoverController: PopoverController) { }

  ngOnInit() : void{
    this.tasks$ = of([
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
      component: CvvPage
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
