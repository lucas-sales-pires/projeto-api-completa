import { Usuario } from "../../models/usuario";

export interface IAtualizarParametrosUsuario {
  nome?: string;
  sobrenome?: string;
  senha?: string;
}

export interface IAtualizarUsuarioRepositorio {
  atualizarUsuario(id: string, params: IAtualizarParametrosUsuario): Promise<Usuario>;
}
