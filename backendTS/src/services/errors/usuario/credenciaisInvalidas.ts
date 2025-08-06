import GenericError from "../generic";

export default class CredenciaisInvalidasError extends GenericError {
  constructor() {
    super({message: "Credenciais inválidas",statusCode:401});
  }
}


