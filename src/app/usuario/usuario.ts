export class Usuario {
    id: number;
    nome: string; 
    login: string;
    senha: string;
    empresa: string;

    constructor(id?:number, nome?: string, login?: string, senha?: string, empresa?: string){
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.empresa = empresa;
    }
}