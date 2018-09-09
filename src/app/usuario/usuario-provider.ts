import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Usuario } from "./usuario";



@Injectable({
    providedIn : 'root'
})

export class UsuarioProvider {

    constructor( private http: HttpClient, private route: Router){

    }
    //NECESSÁRIO SEMPRE CORRIGIR O ENDERECO DO SERVIDOR MYSQL....
    logar(usuario: Usuario){
        this.http.get<Usuario[]>('http://localhost:3001/usuarios').subscribe(resp => {
            let logado: Usuario = resp.find((item) => {
                return item.login == usuario.login && item.senha == usuario.senha
            })
            if (logado){
                sessionStorage.setItem('currentUser', usuario.login);
                this.route.navigateByUrl('/restrita');
            }else{
                alert('Usuario Inválido');
            }
        })
    }

    logout() {
        sessionStorage.removeItem('currentUser');
        this.route.navigateByUrl('/usuario');
    }
}

