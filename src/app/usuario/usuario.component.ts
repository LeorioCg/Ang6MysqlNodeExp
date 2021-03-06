import { Component, OnInit } from "@angular/core";
import { Usuario } from "./usuario";
import { UsuarioProvider } from "./usuario-provider";



@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html'   
  })

  export class UsuarioComponent implements OnInit {
    
      title = 'app';
      usuario: Usuario;
      
      constructor(private service: UsuarioProvider){
          this.usuario = new Usuario();
      }
      
      ngOnInit(): void {        
    }

    logar() {
        this.service.logar(this.usuario);
    }
  }

