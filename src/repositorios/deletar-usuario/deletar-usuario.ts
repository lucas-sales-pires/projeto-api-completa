import { ObjectId } from "mongodb";
import { IDeletarUsuarioRepositorio } from "../../controllers/deletar-usario/interface";
import { MongoClient } from "../../banco/mongo";
import { Usuario } from "../../models/usuario";
import { MongoUsuario } from "../mongo-interface";

export class MongoDeleteUserRepository implements IDeletarUsuarioRepositorio {
  async deletarUsuario(id: string): Promise<Usuario> {
    const usuario = await MongoClient.db
      .collection<MongoUsuario>("usuarios")
      .findOne({ _id: new ObjectId(id) });

    if (!usuario) {
      throw new Error("usuario não encontrado");
    }

    const { deletedCount } = await MongoClient.db
      .collection("usuarios")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("usuario não deletado");
    }

    const { _id, ...rest } = usuario;

    return { id: _id.toHexString(), ...rest };
  }
}
