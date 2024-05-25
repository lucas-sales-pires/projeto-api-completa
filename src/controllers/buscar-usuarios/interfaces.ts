import { Usuario } from "../../models/usuario";
import { HttpResposta } from "../interfaces-geral";

export interface IBuscarUsuariosController {
    funcao(): Promise<HttpResposta<Usuario[]>>;
}

export interface IBuscarUsuariosRepositorio {
    BuscarUsuarios(): Promise<Usuario[]>;
}

