import { api } from "../../config/api";
import { loginBody } from "@shared/types"
import { responseUser } from "src/types";

export const login = async ({ email, senha }: loginBody) => {
    const response: responseUser = await api.post("/auth/login", { email, senha })
    return {
        status: response.status,
        message: response.data.message,
        user: response.data.user,
        token: response.data.token,
    }
}