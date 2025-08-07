import { buscarUsuarioPorId, login } from "src/services/usuario/index";
import { sendResponse } from "../../utils/helpers"
import { TypedRequestBody } from "src/types"
import { gerarToken } from "src/utils/jwt"

// types
import { Request,Response } from "express"
import { userRequest } from "src/types";
import { loginBody, usuarioFrontEnd } from "@shared/types"


export const obterUsuario = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return sendResponse({ res, statusCode: 400, message: "Id inválido" })
    }
    const usuario = await buscarUsuarioPorId({ id: id })
    if (!usuario)
        return sendResponse({ res, statusCode: 400, message: "Usuário não encontrado" })
    return sendResponse<typeof usuario, {user: usuarioFrontEnd}>({ res, statusCode: 200, user: usuario });
}

export const loginUsuario = async (req: TypedRequestBody<loginBody>, res: Response) => {
    const { email, senha } = req.body;
    const usuario = await login({ email: email, senha: senha });

    const token = gerarToken({ payload: usuario.id })
    return sendResponse<typeof usuario, {user: usuarioFrontEnd, token: string}>({ res, statusCode: 200, user: usuario, token: token});
};

export const validarToken = (req: userRequest, res: Response) => {
    // se chegou aqui, o req.user já foi interceptado pelo authMiddleware, e já jogou o obj de usuario
    return sendResponse<null, { user: typeof req.user }>({ res, statusCode: 200, user: req.user }) // retorno 200 só pra não xiar na frente (já q o middleware manda next)
}