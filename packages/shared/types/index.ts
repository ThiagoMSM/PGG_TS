import { z } from 'zod';
import { loginSchema } from '../validators/authvalidator';
import { usuarioFrontendSchema } from '../validators/userValidator';
//import { JwtPayload } from 'jsonwebtoken';

export type loginBody = z.infer<typeof loginSchema>;
export type usuarioFrontEnd = z.infer<typeof usuarioFrontendSchema>;
//
//export interface tokenType extends JwtPayload { id: number }