import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate = (schema: ZodSchema) => (
    req: Request,
    res: Response,
    next: NextFunction
) => { // retorna essa função (basicamente só bate os dados com o schema, e já retorna com erro se não bater...):
    try {
        req.body = schema.parse(req.body); 
        next();
    } catch (err: any) {
        return res.status(400).json({ errors: err.errors });
    }
};