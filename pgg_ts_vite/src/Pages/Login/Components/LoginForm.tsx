import { useState } from "react"
import "../PagLogin.css";
import ButtonCarregar from "../../../Components/Buttons/ButtonCarregar";
import { notificar } from "../../../Components/Toasts/Toast";


function LoginForm() {

    // formulário:
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // variavel de controle
    const [carregando, setCarregando] = useState<boolean>(false);

    const response = {
        status: 200
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        setCarregando(true)
        await new Promise(resolve => setTimeout(resolve, 2000));
        setCarregando(false);

        notificar({ status: response.status, mensagem: "Servidor nem existe menó kkkkk" })

    };

    return (
        <>
            <div className="Container_login">
                <div className="linha-com-texto">
                    <span className="texto-no-meio">Acesse a sua conta</span>
                </div>
                <form onSubmit={(e) => { handleSubmit(e); }}>

                    <div className="grupo-formulario">
                        <label htmlFor="email">Digite seu Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="usuario@dominio.com.br"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grupo-formulario">
                        <label htmlFor="password">Digite sua senha:</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <ButtonCarregar carregando={carregando} texto="Enviar" />

                </form>
            </div>
        </>
    )
}

export default LoginForm