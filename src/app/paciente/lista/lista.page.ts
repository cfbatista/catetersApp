import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../models/paciente.model';
import { Observable } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

    pacientes$: Observable<Paciente[]>;


  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private pacienteService: PacienteService
  ) {}

  async ngOnInit(): Promise<void> {
    // const loading = await this.overlayService.loading();
    this.pacientes$ = this.pacienteService.getAll();
    // this.pacientes$.pipe(take(1)).subscribe(tasks => loading.dismiss());
  }

  onUpdate(paciente: Paciente): void {
    this.navCtrl.navigateForward(['pacientes', 'cadastro', paciente.id]);
  }

  async onDelete(paciente: Paciente): Promise<void> {
    await this.overlayService.alert({
      message: `Você realmente quer deletar o paciente "${paciente.nome}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.pacienteService.delete(paciente);
            // await this.overlayService.toast({
            //   message: `Paciente "${paciente.nome}" deletado!`
            // });
          }
        },
        'Nao'
      ]
    });
  }

  // async onDone(paciente: Paciente): Promise<void> {
  //   const taskToUpdate = { ...paciente, done: !paciente.done };
  //   await this.pacienteService.update(taskToUpdate);
  //   await this.overlayService.toast({
  //     message: `Task "${paciente.title}" ${taskToUpdate.done ? 'completed' : 'updated'}!`
  //   });
  // }
}
