import { buscarUsuarioPorId } from "../../services/usuario"
import { Request } from "express"
import { Response } from "express"
import { sendResponse } from "../../utils/helpers"

export const obterUsuario = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return sendResponse({ res, statusCode: 400, message: "Id inválido" })
    }
    const usuario = await buscarUsuarioPorId({ id: id })
    return sendResponse<typeof usuario>({ res, statusCode: 200, data: usuario, });
}

