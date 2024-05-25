"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDeleteUserRepository = void 0;
const mongodb_1 = require("mongodb");
const mongo_1 = require("../../banco/mongo");
class MongoDeleteUserRepository {
    async deletarUsuario(id) {
        const usuario = await mongo_1.MongoClient.db
            .collection("usuarios")
            .findOne({ _id: new mongodb_1.ObjectId(id) });
        if (!usuario) {
            throw new Error("usuario não encontrado");
        }
        const { deletedCount } = await mongo_1.MongoClient.db
            .collection("usuarios")
            .deleteOne({ _id: new mongodb_1.ObjectId(id) });
        if (!deletedCount) {
            throw new Error("usuario não deletado");
        }
        const { _id, ...rest } = usuario;
        return { id: _id.toHexString(), ...rest };
    }
}
exports.MongoDeleteUserRepository = MongoDeleteUserRepository;
//# sourceMappingURL=deletar-usuario.js.map