import { useState } from "react";

// o que é children? É uma palavra reservada que se refere a tudo que está dentro de algum elemento: <a> <b/> </a>, se você acessar o parâmetro children de <a>, você fica com <b>

type EscolheFormProps = { // define o tipo da variável/paramretro children
    children: [JSX.Element, JSX.Element]; // no caso, ela TEM, que ser dois JSX.element (como visto em PagLogin.tsx)
}

function EscolheForm({ children }: EscolheFormProps) { // passa o valor de children como o tipo custom de cima
    const [logando, setLogando] = useState<boolean>(true); // enforça o valor boolean no useState, e inicializa como true

    const childAtual: JSX.Element = logando ? children[0] : children[1]; // define qual child será exibida, com base em logando
    const TextoAtual: string = logando ? "Esqueceu a senha?" : "Voltar"
    return (
        <>
            {childAtual}
            <div className="esqueceu-senha">
                <a onClick={() => setLogando(prevState => !prevState)}>
                    {TextoAtual}
                </a>
            </div>
        </>
    )
}

export default EscolheForm