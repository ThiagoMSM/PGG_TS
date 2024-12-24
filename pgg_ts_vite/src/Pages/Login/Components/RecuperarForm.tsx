import React, { useState } from 'react'
import MensagemRetorno from "./MensagemRetorno";
import ButtonCarregar from "../../../Components/Buttons/ButtonCarregar";
import EfetuarRecuperacao from '../Functions/EfetuarRecuperacao';
type retorno = {
    msg: string,
    style: string
}

function RecuperarForm() {
    const [emailRecuperacao, setEmailRecuperacao] = useState<string>("");

        // reposta e style da msg (idealmente seria outsourced pra algum outro arquivo, mas oh well)
        const [resposta, setResposta] = useState<string>("");
        const [style, setStyle] = useState<string>("");
    
        // variavel de controle
        const [carregando, setCarregando] = useState<boolean>(false);
        
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setCarregando(true)
        const { msg, style }: retorno = await EfetuarRecuperacao({ emailRecuperacao });
        setResposta(msg);
        setStyle(style);
        setCarregando(false);

    };

    return (
        <div className="Container_EsqueceuSenha">
            <div className="linha-com-texto">
                <span className="texto-no-meio">Recuperação de senha</span>
            </div>
            <form onSubmit={(e) => {handleSubmit(e);}}>
            <MensagemRetorno msg={resposta} setObj={setResposta} style={style} />
                <div className="grupo-formulario">
                    <label htmlFor="email" className="textoSenha">
                        Informe seu e-mail para receber as instruções de
                        recuperação de senha
                    </label>
                    <input
                        id="emailRecuperacao"
                        type="email"
                        placeholder="usuario@dominio.com.br"
                        value={emailRecuperacao}
                        onChange={(e) => setEmailRecuperacao(e.target.value)}
                    />
                </div>
                <ButtonCarregar carregando={carregando} texto="Recuperar"/>
            </form>
        </div>
    )
}

export default RecuperarForm