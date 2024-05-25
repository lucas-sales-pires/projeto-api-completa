import { Usuario } from "../../models/usuario";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequisicao, HttpResposta, IController } from "../interfaces-geral";
import { IDeletarUsuarioRepositorio } from "./interface";

export class DeletarUsuarioController implements IController {
  constructor(private readonly deleteUserRepository: IDeletarUsuarioRepositorio) {}

  async funcao(
    httpRequest: HttpRequisicao<any>
  ): Promise<HttpResposta<Usuario | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Faltando o campo id na requisição.");
      }

      const user = await this.deleteUserRepository.deletarUsuario(id);

      return ok<Usuario>(user);
    } catch (error) {
      return serverError();
    }
  }
}
