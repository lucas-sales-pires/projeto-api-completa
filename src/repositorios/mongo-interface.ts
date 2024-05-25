import { Usuario } from "../models/usuario";

export type MongoUsuario = Omit<Usuario, "id">;
