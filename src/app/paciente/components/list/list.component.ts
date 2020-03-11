import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent{

  @Input() paciente: Paciente;
  @Output() done = new EventEmitter<Paciente>();
  @Output() update = new EventEmitter<Paciente>();
  @Output() delete = new EventEmitter<Paciente>();
}
