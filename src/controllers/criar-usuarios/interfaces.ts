import { Usuario } from "../../models/usuario";
import { HttpResposta } from "../interfaces-geral";

export interface ICriarUsuarioController {
    funcao(): Promise<HttpResposta<Usuario>>;
}

export interface CriarUsuarioParametros {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
}


export interface ICriarUsuariosRepositorio {
    criarUsuario(parametros: CriarUsuarioParametros): Promise<Usuario>;
}  

