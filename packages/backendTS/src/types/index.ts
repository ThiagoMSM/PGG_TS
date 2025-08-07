import { usuarios } from '../generated/prisma';
import {Request} from 'express';
import { JwtPayload } from 'jsonwebtoken';
import {usuarioFrontEnd} from "@shared/types"

export type usuarioSemSenha = Omit<usuarios, 'senha'>;
export type TypedRequestBody<T> = Request<{}, {}, T>;
export interface tokenType extends JwtPayload { id: number };
export interface userRequest extends Request { user?: usuarioFrontEnd };