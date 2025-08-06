import {z} from 'zod';

export const usuarioFrontendSchema = z.object({
    id: z.int(),
    nome: z.string(),
    email: z.email()
});