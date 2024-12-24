/* Documentação dessa bomba:
esse botão espera 1 valor de texto inicial props texto (string)
e uma variável carregando lógica (boolean) 

o componente parente, SEU componente, deve lidar com a lógica por trás da variável carregando

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
*/

import '../../Pages/Login/PagLogin.css'; // idealmente seria com um css próprio, mas mais idealmente ainda seria com tailwind, ou seja, oh well pra que mudar?
type props = {
    carregando: boolean;
    texto: string
}

function ButtonCarregar({carregando, texto}:props) {
    return (
        <button className={carregando ? "loading-button" : ""}>
            {carregando && <div className="loading-circle"></div>}
            {carregando ? "Processando" : texto}
        </button>
    )
}

export default ButtonCarregar