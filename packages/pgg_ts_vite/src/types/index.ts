import { AxiosResponse } from "axios";
import { usuarioFrontEnd } from "@shared/types";


export interface responseUser extends AxiosResponse {
    data: {
        message: string;
        user?: usuarioFrontEnd;
        token?: string;
    }
}
