import {config} from "dotenv"
import {MongoClient as Mongo, Db} from "mongodb";

config()

export const MongoClient = {
    client: undefined as unknown as Mongo,
    db: undefined as unknown as Db,

    async connect(): Promise<void> {
        const url = process.env.MONGODB_URL || "mongodb://localhost:27017";   
        const usuario = process.env.MONGODB_USUARIO || "root";
        const senha = process.env.MONGODB_SENHA || "password";

        const client = new Mongo(url, {auth:{username: usuario, password: senha}});
        const db = client.db("usuarios");

        this.client = client;
        this.db = db;

    } 
    
}
