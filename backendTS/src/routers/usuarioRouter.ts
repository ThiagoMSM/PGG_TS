import express from "express";
import { obterUsuario } from "../controllers/usuario";

const router = express.Router();

router.get("/:id", obterUsuario)


export default router