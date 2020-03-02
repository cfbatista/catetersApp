import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { AuthProvider } from '../core/services/auth.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isLogado: true,
    action: 'Login',
    actionChange: 'Cadastro'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  constructor(private authService : AuthService, private fb: FormBuilder) { }

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

  async onSubmit(provider : AuthProvider) : Promise<void>{
    // console.log('AuthForm ', this.authForm.value);
    try{
      const credentials = await this.authService.autenticacao({
        isLogado : this.configs.isLogado,
        user : this.authForm.value,
        provider
      });
      console.log('Certo', credentials);
    }catch(exception){
      console.log('Erro', exception);
    }
  }
}
