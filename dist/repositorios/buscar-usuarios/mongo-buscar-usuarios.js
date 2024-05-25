"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoBuscarUsuariosRepositorio = void 0;
const mongo_1 = require("../../banco/mongo");
class MongoBuscarUsuariosRepositorio {
    async BuscarUsuarios() {
        const usuarios = await mongo_1.MongoClient.db
            .collection("usuarios")
            .find({})
            .toArray();
        return usuarios.map(({ _id, ...rest }) => ({
            ...rest,
            id: _id.toHexString(),
        }));
    }
}
exports.MongoBuscarUsuariosRepositorio = MongoBuscarUsuariosRepositorio;
//# sourceMappingURL=mongo-buscar-usuarios.js.map