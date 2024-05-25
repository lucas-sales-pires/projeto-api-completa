import express from "express";
import { config } from "dotenv";
import { BuscarUsuariosController } from "./controllers/buscar-usuarios/buscar-usuarios";
import { MongoBuscarUsuariosRepositorio } from "./repositorios/buscar-usuarios/mongo-buscar-usuarios";
import { MongoClient } from "./banco/mongo";
import { MongoCriarUsuario } from "./repositorios/criar-usuarios/mongo-criar-usuarios";
import { CriarUsuarioController } from "./controllers/criar-usuarios/criar-usuarios";
import { MongoAtualizarUsuarioRepositorio } from "./repositorios/atualizar-usuario/atualizar-usuario";
import { AtualizarUsuarioController } from "./controllers/atualizar-usuario/atualizar-usuario";
import { MongoDeleteUserRepository } from "./repositorios/deletar-usuario/deletar-usuario";
import { DeletarUsuarioController } from "./controllers/deletar-usario/deletar-usuario";


const main = async () => {
  config();
  const porta = process.env.PORTA

  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.get("/usuarios", async (req, res) => {
    const mongoBuscarUsuariosRepositorio = new MongoBuscarUsuariosRepositorio();

    const buscarUsuariosController = new BuscarUsuariosController(mongoBuscarUsuariosRepositorio);

    const { body, statusCode } = await buscarUsuariosController.funcao();

    res.status(statusCode).send(body);
  });

  app.post("/usuarios", async (req, res) => {
    const mongoCriarUsuarioRepositorio = new MongoCriarUsuario();

    const criarUsuarioController = new CriarUsuarioController(
      mongoCriarUsuarioRepositorio
    );

    const { body, statusCode } = await criarUsuarioController.funcao({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });

  app.patch("/usuarios/:id", async (req, res) => {
    const mongoAtualizarUsuarioRepositorio = new MongoAtualizarUsuarioRepositorio();

    const atualizarUsuarioController = new AtualizarUsuarioController(
      mongoAtualizarUsuarioRepositorio
    );

    const { body, statusCode } = await atualizarUsuarioController.funcao({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  app.delete("/usuarios/:id", async (req, res) => {
    const mongoDeleteUserRepository = new MongoDeleteUserRepository();

    const deleteUserController = new DeletarUsuarioController(
      mongoDeleteUserRepository
    );

    const { body, statusCode } = await deleteUserController.funcao({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });


  app.listen(porta, () => console.log(`rodando na porta ${porta}!`));
};

main();
