import { badRequest, ok, serverError } from "../helpers";
import { HttpRequisicao, HttpResposta, IController } from "../interfaces-geral";
import { IAtualizarUsuarioRepositorio, IAtualizarParametrosUsuario } from "./interfaces";
import { Usuario } from "../../models/usuario";

export class AtualizarUsuarioController implements IController {
  constructor(private readonly atualizarUsuarioRepositorio: IAtualizarUsuarioRepositorio) {}

  async funcao(
    httpRequest: HttpRequisicao<IAtualizarParametrosUsuario>
  ): Promise<HttpResposta<Usuario | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Campos vazios.");
      }

      if (!id) {
        return badRequest("Usuário sem ID");
      }

      const camposPermitidosAtualizacao: (keyof IAtualizarParametrosUsuario)[] = [
        "nome",
        "sobrenome",
        "senha",
      ];

      const AlgumCampoNaoPermitido = Object.keys(body).some(
        (key) => !camposPermitidosAtualizacao.includes(key as keyof IAtualizarParametrosUsuario)
      );

      if (AlgumCampoNaoPermitido) {
        return badRequest("Algum dado recebido não é permitido para atualização.");
      }

      const usuario = await this.atualizarUsuarioRepositorio.atualizarUsuario(id, body);

      return ok<Usuario>(usuario);
    } catch (error) {
      return serverError();
    }
  }
}
