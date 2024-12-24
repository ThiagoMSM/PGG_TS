import { useState } from "react"
import "../PagLogin.css";
function LoginForm() {
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): string => {
        e.preventDefault();
        return "msg";
    };
    
    return (
        <>
            <div className="Container_login">
                <div className="linha-com-texto">
                    <span className="texto-no-meio">Acesse a sua conta</span>
                </div>
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
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
                    <button>Enviar</button>
                   
                </form>
            </div>
        </>
    )
}

export default LoginForm