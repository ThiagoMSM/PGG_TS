// Vejam essa rota (PagLogin e seus componentes) como um tutorial básico de TypeScript
// = index
import "./PagLogin.css"; // CSS
import Logo from "../../Assets/FundoLoginWeb1921x1416AZUL.png"; // Fundo da página

// Components:
import PggTitulo from "./Components/PggTitulo";
import EscolheForm from "./Components/EscolheForm";
import LoginForm from "./Components/LoginForm";
import RecuperarForm from "./Components/RecuperarForm";
import FooterLogin from "./Components/FooterLogin";

function PagLogin() {
  return (
    <div className="PagLogin">
      <div className="container">
        <div className="container-imagem">
          <img src={Logo} alt="Imagem Tela" className="img-bg" />
        </div>
        <div className="container-formulario">
          <div className="conteudo-formulario">
            <PggTitulo />  
            <EscolheForm>
              <LoginForm />
              <RecuperarForm />
            </EscolheForm>
            <FooterLogin/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagLogin;
