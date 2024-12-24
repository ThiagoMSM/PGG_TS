import { useState } from "react"
import "../PagLogin.css";
import EfetuarLogin from "../Functions/EfetuarLogin";
import MensagemRetorno from "./MensagemRetorno";
import ButtonCarregar from "../../../Components/Buttons/ButtonCarregar";
type retorno = {
    msg: string,
    style: string
}

function LoginForm() {

    // formulário:
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // reposta e style da msg (idealmente seria outsourced pra algum outro arquivo, mas oh well)
    const [resposta, setResposta] = useState<string>("");
    const [style, setStyle] = useState<string>("");

    // variavel de controle
    const [carregando, setCarregando] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setCarregando(true)
        const { msg, style }: retorno = await EfetuarLogin({ email, password });
        setResposta(msg);
        setStyle(style);
        setCarregando(false);
    };

    return (
        <>
            <div className="Container_login">
                <div className="linha-com-texto">
                    <span className="texto-no-meio">Acesse a sua conta</span>
                </div>
                <form onSubmit={(e) => { handleSubmit(e); }}>

                    <MensagemRetorno msg={resposta} setObj={setResposta} style={style} />
                    <div className="grupo-formulario">
                        <label htmlFor="email">Digite seu Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="usuario@dominio.com.br"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        />
                    </div>

                    <ButtonCarregar carregando={carregando} texto="Enviar"/>

                </form>
            </div>
        </>
    )
}

export default LoginForm