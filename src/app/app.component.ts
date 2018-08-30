import { Component } from '@angular/core';
import { UsuarioProvider } from './usuario/usuario-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private service: UsuarioProvider){

  }

  public logout() {
    this.service.logout();
  }

}
