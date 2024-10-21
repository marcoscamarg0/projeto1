import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './App.css';  
import logo from './assets/logo.png';  

const LoginPage = () => {
  const navigate = useNavigate(); // Hook para redirecionamento

  // Função que lida com o sucesso do login
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login bem-sucedido:", credentialResponse);
    // Após o login bem-sucedido, redireciona para o Dashboard
    navigate('/dashboard');  // Isso deve redirecionar o usuário
  };

  // Função que lida com erros no login
  const handleLoginError = () => {
    console.error("Falha no login");
    alert('Falha no login com o Google');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Circuito</h1>
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
