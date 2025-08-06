import GenericError from "../generic";

export default class JwtSecretNotFoundError extends GenericError {
  constructor() {
    super({message: "JWT_SECRET Ausente",statusCode:401});
  }
}


