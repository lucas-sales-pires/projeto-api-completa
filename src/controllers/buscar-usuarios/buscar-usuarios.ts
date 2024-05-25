import { Usuario } from "../../models/usuario";
import { ok, serverError } from "../helpers";
import { HttpResposta, IController } from "../interfaces-geral";
import { IBuscarUsuariosRepositorio } from "./interfaces";

export class BuscarUsuariosController implements IController {
  constructor(private readonly buscarUsuariosRepositorio: IBuscarUsuariosRepositorio) {}

  async funcao(): Promise<HttpResposta<Usuario[] | string>> {
    try {
      const usuarios = await this.buscarUsuariosRepositorio.BuscarUsuarios();

      return ok<Usuario[]>(usuarios);
    } catch (error) {
      return serverError();
    }
  }
}
