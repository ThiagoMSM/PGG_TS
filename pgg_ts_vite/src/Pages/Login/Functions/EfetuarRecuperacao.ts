import axios, { AxiosResponse, AxiosError } from 'axios';

type RedefinirSenhaProp = {
    emailRecuperacao: string
};

type responseType = AxiosResponse<{
    message: string;
}>

type resposta = {
    msg: string,
    style: string
}

async function EfetuarRecuperacao({ emailRecuperacao }: RedefinirSenhaProp): Promise<any> {
    try {
        const response: responseType = await axios.post('http://localhost:4000/Login', {
            email: emailRecuperacao,
        });
        const msg: string = response.data.message;

        const objRetorno: resposta = { msg: msg, style: "mensagem-acerto" }
        return objRetorno;
    } catch (error: AxiosError | any) {
        if (error.response) {
            
            let errorMsg: string = "";
            switch (error.response.status) {
                case 400:
                    errorMsg = "Email inválido inserido";
                    break;
                case 404:
                    errorMsg = "Email não encontrado na base de dados";
                    break;
                case 500:
                    errorMsg = "Erro ao acessar o servidor";
                    break;
                default:
                    errorMsg = "Erro desconhecido";
            }
            const objRetorno: resposta = { msg: errorMsg, style: "mensagem-erro" };
            return objRetorno;
        }

        const objRetorno: resposta = { msg: "Erro de conexão, ou erro interno de servidor", style: "mensagem-erro" };
        return objRetorno;
    }
}

export default EfetuarRecuperacao