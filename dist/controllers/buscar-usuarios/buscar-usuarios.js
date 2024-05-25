"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarUsuariosController = void 0;
const helpers_1 = require("../helpers");
class BuscarUsuariosController {
    constructor(buscarUsuariosRepositorio) {
        this.buscarUsuariosRepositorio = buscarUsuariosRepositorio;
    }
    async funcao() {
        try {
            const usuarios = await this.buscarUsuariosRepositorio.BuscarUsuarios();
            return (0, helpers_1.ok)(usuarios);
        }
        catch (error) {
            return (0, helpers_1.serverError)();
        }
    }
}
exports.BuscarUsuariosController = BuscarUsuariosController;
//# sourceMappingURL=buscar-usuarios.js.map