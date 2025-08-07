import { api } from "../../config/api";
import { loginType } from '../../types/index'

const login = async ({ email, senha }: loginType) => {
    const response = await api.post("/auth/login", {email,senha})
    response.data.
}