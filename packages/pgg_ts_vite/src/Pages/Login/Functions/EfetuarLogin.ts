import { loginBody } from "@shared/types"
import { login } from "../../../services/usuario/auth";

async function EfetuarLogin({ email, senha }: loginBody) {
    try {
        const response = await login({ email, senha })
        return {
            user: response.user,
            token: response.token,
            status: response.status ?? 200,
            message: "Login efetuado com sucesso",
        };
    } catch (error: any) {
        console.log(error)
        return {
            status: 400,
            message: error?.response?.data?.message ?? "Erro inesperado ao efetuar login",
        }
    }
}

export default EfetuarLogin