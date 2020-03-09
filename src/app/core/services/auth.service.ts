import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthOptions, AuthProvider, User } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	authState$ : Observable<firebase.User>;

	constructor(private afAuth: AngularFireAuth) {
		this.authState$ = this.afAuth.authState;
	}

	autenticacao({ isLogado, provider, user } : AuthOptions) : Promise<auth.UserCredential>{
		let operacoes : Promise<auth.UserCredential>;

		if(provider !== AuthProvider.EMAIL){
			operacoes = this.loginPopup(provider);
		}else{
			operacoes = isLogado ? this.loginEmailSenha(user) : this.cadastrarEmailSenha(user);
		}

		return operacoes;
	}

	logout() : Promise<void>{
		return this.afAuth.auth.signOut();
	}

	get isAutenticado() : Observable<boolean>{
		return this.authState$.pipe(map(user => user !== null));
	}

  private loginEmailSenha({ email, senha } : User) : Promise <auth.UserCredential>{
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha);
  }

  private cadastrarEmailSenha({ email, senha, nome} : User) : Promise <auth.UserCredential>{
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, senha)
      .then(credentials => credentials.user
        .updateProfile({ displayName: nome, photoURL: null })
        .then(() => credentials)
      );
	}

	private loginPopup(provider : AuthProvider): Promise<auth.UserCredential>{
		let loginProvider = null;
		switch(provider){
			case AuthProvider.FACEBOOK:
				loginProvider = new auth.FacebookAuthProvider();
				break;
			case AuthProvider.GOOGLE:
				loginProvider = new auth.GoogleAuthProvider();
				break;
		}
		return this.afAuth.auth.signInWithPopup(loginProvider);
	}
}
