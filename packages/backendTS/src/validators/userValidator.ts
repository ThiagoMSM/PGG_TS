import {z} from '@shared/zod/z';

export const usuarioFrontendSchema = z.object({
    id: z.int(),
    nome: z.string(),
    email: z.email()
});