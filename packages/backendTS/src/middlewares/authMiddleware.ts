import jwt from 'jsonwebtoken';
import { sendErrorResponse } from '../utils/helpers';
import { Response, NextFunction } from 'express';
import { buscarUsuarioPorId } from '../services/usuario';
import { usuarioFrontendSchema } from '../validators/userValidator';
import JwtSecretNotFoundError from '../services/errors/sistema/jwtNotFound';

//types
import { usuarioFrontEnd } from "@shared/types"
import { userRequest, tokenType } from 'src/types';


export const authMiddleware = async (req: userRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return sendErrorResponse({
            res,
            statusCode: 401,
            message: "Token ausente. Acesso negado"
        });
    }

    if (!process.env.JWT_SECRET) {
        throw new JwtSecretNotFoundError();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as tokenType; // token (id)
        const parsedUser =  usuarioFrontendSchema.safeParse(await buscarUsuarioPorId({ id: decoded.id })) // userObj (parsed)
        if (!parsedUser.success) {
            return sendErrorResponse({
                res,
                statusCode: 401,
                message: "Usuário não encontrado na base de dados"
            })
        }
        req.user = parsedUser.data as usuarioFrontEnd
        next();
    } catch (error) {
        return sendErrorResponse({
            res,
            statusCode: 401,
            message: "Token inválido"
        })
    }

}