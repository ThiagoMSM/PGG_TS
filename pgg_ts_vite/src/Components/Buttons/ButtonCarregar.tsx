/* Documentação dessa bomba:
esse botão espera 1 valor de texto inicial props texto (string)
e uma variável carregando lógica (boolean) 

o componente parente, SEU componente, deve lidar com a lógica por trás da variável carregando
O SEU componente também é responsável por estilizar o botão em seu estado neutro (não carregando)
opcionalmente, você pode passar styles para o estado de carregamento (via styleCarregando)

carregando === true => exibe: Processando + bolinha de carregamento e desativa o botão
carregando === false => exibe: Texto que VOCÊ definiu (props texto) e deixa o botão ativo

Quando usar ButtonCarregar?
    1- Quando você quer um botão que limite os inputs do usuário enquanto a ação não for concluída (exemplo: login)
    2- Quando você quer uma cola visual pro usuário
    3- Ações que demoram um pouco mais que as outras

Como usar?
    1- Importe
    2- Seu componente decide quando o botão está ativo ou inativo, basta mudar o prop carregando
    3- Entendeu nada? veja um exemplo em: LoginForm.tsx 


    Alterações 17/07/2025:
    Possível alterar o design no estado de carregamento
     <ButtonCarregar carregando={carregando} texto="Enviar" styleCarregando={{backgroundColor: "Green"}}/>
     styleCarregando é um parâmetro opcional, onde você consegue adicionar ou substituir styles do botão no estado de carregamento


*/

import './ButtonCarregar.css';
type props = {
    carregando: boolean;
    texto: string
    styleCarregando?: React.CSSProperties
}


function ButtonCarregar({ carregando, texto, styleCarregando }: props) {
    const styles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#3d99d1',
        border: 'none',
        borderRadius: 5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
        position: 'relative',
         ...styleCarregando
    }
    
    return (
        <div className='ButtonCarregar'>
            <button style={carregando ? styles : {}}  > {/* se estiver carregando, override o design antigo */}
                {carregando && <div className="loading-circle"></div>}
                {carregando ? "Processando" : texto}
            </button>
        </div>
    )
}

export default ButtonCarregar