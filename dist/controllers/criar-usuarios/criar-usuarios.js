"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarUsuarioController = void 0;
const validator_1 = __importDefault(require("validator"));
const helpers_1 = require("../helpers");
class CriarUsuarioController {
    constructor(criarUsuarioRepositorio) {
        this.criarUsuarioRepositorio = criarUsuarioRepositorio;
    }
    async funcao(httpRequest) {
        var _a, _b;
        try {
            const camposNecessarios = ["nome", "sobrenome", "email", "senha"];
            for (const campo of camposNecessarios) {
                if (!((_b = (_a = httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.body) === null || _a === void 0 ? void 0 : _a[campo]) === null || _b === void 0 ? void 0 : _b.length)) {
                    return (0, helpers_1.badRequest)(`Campo ${campo} é necessário`);
                }
            }
            const emailValido = validator_1.default.isEmail(httpRequest.body.email);
            if (!emailValido) {
                return (0, helpers_1.badRequest)("E-mail é inválido");
            }
            const usuario = await this.criarUsuarioRepositorio.criarUsuario(httpRequest.body);
            return (0, helpers_1.created)(usuario);
        }
        catch (error) {
            return (0, helpers_1.serverError)();
        }
    }
}
exports.CriarUsuarioController = CriarUsuarioController;
//# sourceMappingURL=criar-usuarios.js.map