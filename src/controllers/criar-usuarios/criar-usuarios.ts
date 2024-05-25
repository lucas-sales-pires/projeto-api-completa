import validator from "validator";

import { Usuario } from "../../models/usuario";
import { badRequest, created, serverError } from "../helpers";
import { HttpRequisicao, HttpResposta, IController } from "../interfaces-geral";
import { CriarUsuarioParametros, ICriarUsuariosRepositorio } from "./interfaces";

export class CriarUsuarioController implements IController {
  constructor(private readonly criarUsuarioRepositorio: ICriarUsuariosRepositorio) {}

  async funcao(
    httpRequest: HttpRequisicao<CriarUsuarioParametros>
  ): Promise<HttpResposta<Usuario | string>> {
    try {
      const camposNecessarios = ["nome", "sobrenome", "email", "senha"];

      for (const campo of camposNecessarios) {
        if (!httpRequest?.body?.[campo as keyof CriarUsuarioParametros]?.length) {
          return badRequest(`Campo ${campo} é necessário`);
        }
      }

      const emailValido = validator.isEmail(httpRequest.body!.email);

      if (!emailValido) {
        return badRequest("E-mail é inválido");
      }

      const usuario = await this.criarUsuarioRepositorio.criarUsuario(
        httpRequest.body!
      );

      return created<Usuario>(usuario);
    } catch (error) {
      return serverError();
    }
  }
}
