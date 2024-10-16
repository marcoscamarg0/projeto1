
import { GoogleLogin } from '@react-oauth/google';
import './App.css';  // Importa os estilos da página de login
import logo from './assets/logo.png';  // Importa o arquivo de logo

const LoginPage = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login bem-sucedido:", credentialResponse);
  };

  const handleLoginError = () => {
    console.error("Falha no login");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo" />
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </div>
  );
};

export default LoginPage;
