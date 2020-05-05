import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastroForm: FormGroup;
  pageTitle = '...';
  pacienteId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const pacienteId = this.route.snapshot.paramMap.get('id');
    if (!pacienteId) {
      this.pageTitle = 'Criar paciente';
      return;
    }
    this.pacienteId = pacienteId;
    this.pageTitle = 'Editar paciente';
    this.pacienteService
      .getById(pacienteId)
      .pipe(take(1))
      .subscribe(({ nome, nprontuario, leito, unidade, dispositivo, data }) => {
        this.cadastroForm.get('nome').setValue(nome);
        this.cadastroForm.get('nprontuario').setValue(nprontuario);
        this.cadastroForm.get('leito').setValue(leito);
        this.cadastroForm.get('unidade').setValue(unidade);
        this.cadastroForm.get('dispositivo').setValue(dispositivo);
        this.cadastroForm.get('data').setValue(data);
      });
  }

  private createForm(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(8)]],
      nprontuario: ['', [Validators.required, Validators.minLength(5)]],
      leito: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      data: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    // const loading = await this.overlayService.loading({
    //   message: 'Salvando...'
    // });
    try {
      const paciente = !this.pacienteId
        ? await this.pacienteService.create(this.cadastroForm.value)
        : await this.pacienteService.update({
            id: this.pacienteId,
            ...this.cadastroForm.value
          });
      this.navCtrl.navigateBack('/home/op/pacientes');
    } catch (error) {
      console.log('Erro ao salvar ', error);
    //   await this.overlayService.toast({
    //     message: error.message
    //   });
    // } finally {
    //   loading.dismiss();
    }
  }
}
