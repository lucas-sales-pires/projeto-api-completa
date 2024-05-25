"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = void 0;
const dotenv_1 = require("dotenv");
const mongodb_1 = require("mongodb");
(0, dotenv_1.config)();
exports.MongoClient = {
    client: undefined,
    db: undefined,
    async connect() {
        const url = process.env.MONGODB_URL || "mongodb://localhost:27017";
        const usuario = process.env.MONGODB_USUARIO || "root";
        const senha = process.env.MONGODB_SENHA || "password";
        const client = new mongodb_1.MongoClient(url, { auth: { username: usuario, password: senha } });
        const db = client.db("usuarios");
        this.client = client;
        this.db = db;
    }
};
//# sourceMappingURL=mongo.js.map