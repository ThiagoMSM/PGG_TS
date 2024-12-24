
import axios, { AxiosResponse,AxiosError } from 'axios';

type loginProps = {
    email: string,
    password: string
};

type UserData = {
    CPF: string;
    Celular: string;
    Email: string;
    Grupo_Acesso: number,
    Nome: string;
};

type responseType = AxiosResponse<{
    message: string,
    id?: string,
    userData?: UserData,
    error?: string,
}>

type resposta = {
    msg: string,
    style: string
}

async function EfetuarLogin({ email, password }: loginProps) { //todo return vai pro frontend
    try {
        const response: responseType = await axios.post('http://localhost:4000/Login', {
            email: email,
            password: password
        });
        const msg: string = response.data.message;

        const objRetorno:resposta = {msg: msg, style: "mensagem-acerto"}
        return objRetorno;

    } catch (error: AxiosError|any) {
        if(error.response){
            const errorMsg = error?.response?.data?.message;
            const objRetorno:resposta = {msg: errorMsg || "Erro desconhecido", style: "mensagem-erro"};
            return objRetorno;
        }
        const objRetorno:resposta = {msg:"Erro de conexão, ou erro interno de servidor",  style: "mensagem-erro"};
        return objRetorno;
    }
}

export default EfetuarLogin