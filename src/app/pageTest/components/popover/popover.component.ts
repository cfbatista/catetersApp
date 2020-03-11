import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent{

  constructor(public popoverController: PopoverController) { }

  async dismissPopover(){
    return await this.popoverController.dismiss();
  }
}
