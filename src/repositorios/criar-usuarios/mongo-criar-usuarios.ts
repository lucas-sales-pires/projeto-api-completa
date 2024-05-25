import { MongoClient } from "../../banco/mongo";
import { CriarUsuarioParametros, ICriarUsuariosRepositorio } from "../../controllers/criar-usuarios/interfaces";
import { Usuario } from "../../models/usuario";

export class MongoCriarUsuario implements ICriarUsuariosRepositorio {
    async criarUsuario(parametros: CriarUsuarioParametros): Promise<Usuario> {
       const {insertedId} =  await MongoClient.db.collection("usuarios").insertOne(parametros);

       const usuario = await MongoClient.db.collection<Omit <Usuario,"id">>("usuarios").findOne({_id:insertedId});

       if(!usuario){
           throw new Error("Usuario não encontrado");
       }

       const { _id, ...resto } = usuario;

         return {
              ...resto,
              id: _id.toHexString()
         }
    }
}
