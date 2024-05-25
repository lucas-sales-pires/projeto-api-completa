
import { Usuario } from "../../models/usuario";

export interface IDeletarUsuarioRepositorio {
  deletarUsuario(id: string): Promise<Usuario>;
}
