"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletarUsuarioController = void 0;
const helpers_1 = require("../helpers");
class DeletarUsuarioController {
    constructor(deleteUserRepository) {
        this.deleteUserRepository = deleteUserRepository;
    }
    async funcao(httpRequest) {
        var _a;
        try {
            const id = (_a = httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.params) === null || _a === void 0 ? void 0 : _a.id;
            if (!id) {
                return (0, helpers_1.badRequest)("Faltando o campo id na requisição.");
            }
            const user = await this.deleteUserRepository.deletarUsuario(id);
            return (0, helpers_1.ok)(user);
        }
        catch (error) {
            return (0, helpers_1.serverError)();
        }
    }
}
exports.DeletarUsuarioController = DeletarUsuarioController;
//# sourceMappingURL=deletar-usuario.js.map