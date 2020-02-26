export enum AuthProvider {
    EMAIL,
    FACEBOOK,
    GOOGLE
}

export interface User {
    nome ?: string,
    email : string,
    senha : string
}

export interface AuthOptions {
    isLogado : boolean,
    provider : AuthProvider,
    user : User
}