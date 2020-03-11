import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../models/paciente.model';
import { Observable } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

    pacientes$: Observable<Paciente[]>;

    constructor(private pacinteService: PacienteService) { }
  ngOnInit(): void {
      this.pacientes$ = this.pacinteService.getAll();
  }
}
