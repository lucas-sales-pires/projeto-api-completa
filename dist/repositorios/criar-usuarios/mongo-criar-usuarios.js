"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCriarUsuario = void 0;
const mongo_1 = require("../../banco/mongo");
class MongoCriarUsuario {
    async criarUsuario(parametros) {
        const { insertedId } = await mongo_1.MongoClient.db.collection("usuarios").insertOne(parametros);
        const usuario = await mongo_1.MongoClient.db.collection("usuarios").findOne({ _id: insertedId });
        if (!usuario) {
            throw new Error("Usuario não encontrado");
        }
        const { _id, ...resto } = usuario;
        return {
            ...resto,
            id: _id.toHexString()
        };
    }
}
exports.MongoCriarUsuario = MongoCriarUsuario;
//# sourceMappingURL=mongo-criar-usuarios.js.map