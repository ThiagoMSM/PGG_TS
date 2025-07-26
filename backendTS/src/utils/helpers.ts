import { Response } from "express";

type SendResponseProps<T> = {
  res: Response;
  statusCode: number;
  message?: string;
  data?: T;
};

export const sendResponse = <T>({ res, statusCode, message = "OK", data }: SendResponseProps<T>) => {
  res.status(statusCode).json({ message, data });
};