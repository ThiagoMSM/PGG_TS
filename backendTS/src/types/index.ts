import { Request } from 'express';
import * as z from 'zod';
import { loginSchema } from '../validators/authValidator';
import { usuarioFrontendSchema } from '../validators/userValidator';
import { usuarios } from '../generated/prisma';
import { JwtPayload } from 'jsonwebtoken';

export type TypedRequestBody<T> = Request<{}, {}, T>;
export type loginBody = z.infer<typeof loginSchema>;
export type usuarioSemSenha = Omit<usuarios, 'senha'>;
export type usuarioFrontEnd = z.infer<typeof usuarioFrontendSchema>;
export interface userRequest extends Request { user?: usuarioFrontEnd };
export interface tokenType extends JwtPayload { id: number }