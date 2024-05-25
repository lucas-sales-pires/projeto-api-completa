"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarUsuarioController = void 0;
const helpers_1 = require("../helpers");
class AtualizarUsuarioController {
    constructor(atualizarUsuarioRepositorio) {
        this.atualizarUsuarioRepositorio = atualizarUsuarioRepositorio;
    }
    async funcao(httpRequest) {
        var _a;
        try {
            const id = (_a = httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.params) === null || _a === void 0 ? void 0 : _a.id;
            const body = httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.body;
            if (!body) {
                return (0, helpers_1.badRequest)("Campos vazios.");
            }
            if (!id) {
                return (0, helpers_1.badRequest)("Usuário sem ID");
            }
            const camposPermitidosAtualizacao = [
                "nome",
                "sobrenome",
                "senha",
            ];
            const AlgumCampoNaoPermitido = Object.keys(body).some((key) => !camposPermitidosAtualizacao.includes(key));
            if (AlgumCampoNaoPermitido) {
                return (0, helpers_1.badRequest)("Algum dado recebido não é permitido para atualização.");
            }
            const usuario = await this.atualizarUsuarioRepositorio.atualizarUsuario(id, body);
            return (0, helpers_1.ok)(usuario);
        }
        catch (error) {
            return (0, helpers_1.serverError)();
        }
    }
}
exports.AtualizarUsuarioController = AtualizarUsuarioController;
//# sourceMappingURL=atualizar-usuario.js.map