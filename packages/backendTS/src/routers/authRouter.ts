import express from "express";
import { loginUsuario, validarToken } from "../controllers/usuario";
import { loginSchema } from "../validators/authValidator";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";
import { asyncHandler } from "../utils/helpers";

const router = express.Router();

router.post("/login", validateMiddleware(loginSchema), asyncHandler(loginUsuario));

router.get("/validarToken", 
    authMiddleware,
    validarToken
)

export default router