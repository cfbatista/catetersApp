import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  configs = {
    isLogado: true,
    action: 'Login',
    actionChange: 'Cadastro'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void{
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get nome() : FormControl {
    return <FormControl> this.authForm.get('nome');
  }

  get email() : FormControl {
    return <FormControl> this.authForm.get('email');
  }

  get senha() : FormControl {
    return <FormControl> this.authForm.get('senha');
  }

  mudarAuthForm(): void {
    this.configs.isLogado = !this.configs.isLogado;

    const { isLogado } = this.configs;

    this.configs.action = isLogado ? 'Login' : 'Cadastro';
    this.configs.actionChange = isLogado ? 'Cadastro' : 'Já possui uma conta';

    !isLogado 
      ? this.authForm.addControl('nome', this.nameControl) 
      : this.authForm.removeControl('nome');
  }

  onSubmit() : void{
    console.log('AuthForm ', this.authForm.value);
  }
}
