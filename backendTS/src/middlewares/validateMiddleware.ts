import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const validateMiddleware = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    
    const result = schema.safeParse(req.body);
   
    if (!result.success){
        res.status(400).json({ errors: result.error.issues });
        return
    }
    req.body = result.data;
    next();
  };
};
