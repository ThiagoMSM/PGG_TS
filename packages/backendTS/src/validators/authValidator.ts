import {z} from '@shared/zod/z';

export const loginSchema = z.object({
    email: z.email("Email inválido"),
    senha: z.string().min(6,"Senha deve ter no mínimo 6 caracteres"),
});