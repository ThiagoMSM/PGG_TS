import { loginSchema } from "../../validators/authValidator";
import {z} from 'zod';

export type loginType = z.infer<typeof loginSchema>;