import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../usuario/usuario";


@Component({
    selector: 'app-restrita',
    templateUrl: './restrita.component.html'    
})
export class RestritaComponent {

    title = 'app';
    usuario: Usuario;
    
    @Input() recebeDados: Object[];

    

    constructor(private http: HttpClient){

    }


    
}