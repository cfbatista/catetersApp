import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent{

  @Input() item : Item;
  @Output() done = new EventEmitter<Item>();
  @Output() update = new EventEmitter<Item>();
  @Output() delete = new EventEmitter<Item>();
}
