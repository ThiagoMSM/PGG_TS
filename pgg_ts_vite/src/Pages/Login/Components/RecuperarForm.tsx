import React, { useState } from 'react'

function RecuperarForm() {
    const [emailRecuperacao, setEmailRecuperacao] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): string => {
        e.preventDefault();
        return "msg";
    };

    return (
        <div className="Container_EsqueceuSenha">
            <div className="linha-com-texto">
                <span className="texto-no-meio">Recuperação de senha</span>
            </div>
            <form onSubmit={(e) => {handleSubmit(e);}}>
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
                <button
                    type="submit"
                >
                    Recuperar
                </button>
            </form>
        </div>
    )
}

export default RecuperarForm