interface GenericErrorParams {
  message: string;
  statusCode: number;
  details: string;
}

export default class GenericError extends Error {

    public statusCode: number;
    public details: string;
        
    constructor({
        message = "Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.",
        statusCode = 500,
        details = "internal server error"
    }: Partial<GenericErrorParams> = {}) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
    }
}

