import { MongoClient } from "../../banco/mongo";
import { IBuscarUsuariosRepositorio } from "../../controllers/buscar-usuarios/interfaces";
import { Usuario } from "../../models/usuario";
import { MongoUsuario } from "../mongo-interface";

export class MongoBuscarUsuariosRepositorio implements IBuscarUsuariosRepositorio {
    async BuscarUsuarios(): Promise<Usuario[]> {
        const usuarios = await MongoClient.db
          .collection<MongoUsuario>("usuarios")
          .find({})
          .toArray();
    
        return usuarios.map(({ _id, ...rest }) => ({
          ...rest,
          id: _id.toHexString(),
        }));
      }
}
