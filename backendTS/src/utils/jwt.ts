import jwt from 'jsonwebtoken';
import JwtSecretNotFoundError from '../services/errors/sistema/jwtNotFound';

type StringValue = `${number}${"s" | "m" | "h" | "d" | "w" | "y"}`;
interface gerarTokenProps {
    payload: number,
    expiry?: StringValue
}

export const gerarToken = ({ payload, expiry = "24h" }: gerarTokenProps) => {
    if (!process.env.JWT_SECRET)
        throw new JwtSecretNotFoundError();

    return jwt.sign({ id: payload }, process.env.JWT_SECRET, {
        expiresIn: expiry
    })
}