import React from "react";
import { toast, ToastOptions, TypeOptions } from "react-toastify";

const styles: React.CSSProperties = {
    width: '20rem',
    height: '80px',
    fontSize: "16px"
}

const tipoMap = {
    success: "success",
    error: "error",
    default: "default",
    info: "info",
    warning: "warning",
    200: "success",
    400: "error",
    401: "error",
    403: "error",
    404: "error",
    500: "warning",
} as const;

type Tipo = keyof typeof tipoMap | number;

const escolheTipo = (tipo: Tipo): TypeOptions => tipoMap[tipo as keyof typeof tipoMap] ?? "default";

type props = {
    status: Tipo,
    mensagem: string,
    opts?: ToastOptions
}

export const notificar = ({ status, mensagem, opts }: props) => toast(mensagem, {
    position: "bottom-right",
    type: escolheTipo(status),
    theme: "colored",
    style: styles,
    ...opts
});

