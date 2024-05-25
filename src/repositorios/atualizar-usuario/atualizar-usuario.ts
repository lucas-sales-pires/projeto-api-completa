import { ObjectId } from "mongodb";

import {
  IAtualizarParametrosUsuario,
  IAtualizarUsuarioRepositorio,
} from "../../controllers/atualizar-usuario/interfaces";
import { MongoClient } from "../../banco/mongo";
import { Usuario } from "../../models/usuario";
import { MongoUsuario } from "../mongo-interface";

export class MongoAtualizarUsuarioRepositorio implements IAtualizarUsuarioRepositorio {
  async atualizarUsuario(id: string, params: IAtualizarParametrosUsuario): Promise<Usuario> {
    await MongoClient.db.collection("usuarios").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const user = await MongoClient.db
      .collection<MongoUsuario>("usuarios")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("Usuario não encontrado.");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
