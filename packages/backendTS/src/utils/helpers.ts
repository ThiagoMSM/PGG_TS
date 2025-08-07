import { Response, Request, NextFunction, RequestHandler, Errback } from "express";

type SendResponseProps<T, Extra extends Record<string, any> = {}> = {
  res: Response;
  statusCode: number;
  message?: string;
  data?: T;
} & Extra;

export const sendResponse = <T, Extra extends Record<string, any> = {}>({ res, statusCode, message = "OK", data, ...extra }: SendResponseProps<T, Extra>) => {
  res.status(statusCode).json({ message, data, ...extra });
};

type sendErrorResponseProps = {
  res: Response;
  statusCode: number;
  message?: string;
  error?: unknown | unknown[];
}

export const sendErrorResponse = ({ res, statusCode, message, error }: sendErrorResponseProps) => {
  res.status(statusCode).json({ message, ...(error ? { error } : {}) });
}

type asyncHandlerTypes = (req: Request, res: Response, next: NextFunction) => Promise<any>
export function asyncHandler(fn: asyncHandlerTypes): RequestHandler {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

