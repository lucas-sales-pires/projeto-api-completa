"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAtualizarUsuarioRepositorio = void 0;
const mongodb_1 = require("mongodb");
const mongo_1 = require("../../banco/mongo");
class MongoAtualizarUsuarioRepositorio {
    async atualizarUsuario(id, params) {
        await mongo_1.MongoClient.db.collection("usuarios").updateOne({ _id: new mongodb_1.ObjectId(id) }, {
            $set: {
                ...params,
            },
        });
        const user = await mongo_1.MongoClient.db
            .collection("usuarios")
            .findOne({ _id: new mongodb_1.ObjectId(id) });
        if (!user) {
            throw new Error("Usuario não encontrado.");
        }
        const { _id, ...rest } = user;
        return { id: _id.toHexString(), ...rest };
    }
}
exports.MongoAtualizarUsuarioRepositorio = MongoAtualizarUsuarioRepositorio;
//# sourceMappingURL=atualizar-usuario.js.map