"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const buscar_usuarios_1 = require("./controllers/buscar-usuarios/buscar-usuarios");
const mongo_buscar_usuarios_1 = require("./repositorios/buscar-usuarios/mongo-buscar-usuarios");
const mongo_1 = require("./banco/mongo");
const mongo_criar_usuarios_1 = require("./repositorios/criar-usuarios/mongo-criar-usuarios");
const criar_usuarios_1 = require("./controllers/criar-usuarios/criar-usuarios");
const atualizar_usuario_1 = require("./repositorios/atualizar-usuario/atualizar-usuario");
const atualizar_usuario_2 = require("./controllers/atualizar-usuario/atualizar-usuario");
const deletar_usuario_1 = require("./repositorios/deletar-usuario/deletar-usuario");
const deletar_usuario_2 = require("./controllers/deletar-usario/deletar-usuario");
const main = async () => {
    (0, dotenv_1.config)();
    const porta = process.env.PORTA;
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    await mongo_1.MongoClient.connect();
    app.get("/usuarios", async (req, res) => {
        const mongoBuscarUsuariosRepositorio = new mongo_buscar_usuarios_1.MongoBuscarUsuariosRepositorio();
        const buscarUsuariosController = new buscar_usuarios_1.BuscarUsuariosController(mongoBuscarUsuariosRepositorio);
        const { body, statusCode } = await buscarUsuariosController.funcao();
        res.status(statusCode).send(body);
    });
    app.post("/usuarios", async (req, res) => {
        const mongoCriarUsuarioRepositorio = new mongo_criar_usuarios_1.MongoCriarUsuario();
        const criarUsuarioController = new criar_usuarios_1.CriarUsuarioController(mongoCriarUsuarioRepositorio);
        const { body, statusCode } = await criarUsuarioController.funcao({
            body: req.body,
        });
        res.status(statusCode).send(body);
    });
    app.patch("/usuarios/:id", async (req, res) => {
        const mongoAtualizarUsuarioRepositorio = new atualizar_usuario_1.MongoAtualizarUsuarioRepositorio();
        const atualizarUsuarioController = new atualizar_usuario_2.AtualizarUsuarioController(mongoAtualizarUsuarioRepositorio);
        const { body, statusCode } = await atualizarUsuarioController.funcao({
            body: req.body,
            params: req.params,
        });
        res.status(statusCode).send(body);
    });
    app.delete("/usuarios/:id", async (req, res) => {
        const mongoDeleteUserRepository = new deletar_usuario_1.MongoDeleteUserRepository();
        const deleteUserController = new deletar_usuario_2.DeletarUsuarioController(mongoDeleteUserRepository);
        const { body, statusCode } = await deleteUserController.funcao({
            params: req.params,
        });
        res.status(statusCode).send(body);
    });
    app.listen(porta, () => console.log(`rodando na porta ${porta}!`));
};
main();
//# sourceMappingURL=index.js.map