import { Response,NextFunction,Errback } from "express"
import GenericError from "../services/errors/generic"
import { sendErrorResponse } from "../utils/helpers"
export const errorMiddleware = (err: Errback, _:any, res: Response, next: NextFunction) =>{
    
    if (err instanceof GenericError){
        console.log("Error Middleware, GenericError:", err.statusCode);
        
        return sendErrorResponse({
            res,
            statusCode: err.statusCode,
            message: err.message,
            error: err.details
        })
    }

    console.log("Error Middleware, fallback:", err instanceof Error ? err.message : String(err));
    return sendErrorResponse({
        res,
        statusCode: 500,
        message: "Houve um erro inesperado, tente novamente mais tarde",
        error: err instanceof Error ? err.message : String(err)
    })
}