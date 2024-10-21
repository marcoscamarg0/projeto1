import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css'; 
import LoginPage from './LoginPage';
import Dashboard from './Dashboard'; 

const clientId = '64141712421-0ck032kn9nes6bl3kg0sdk68s6brb73s.apps.googleusercontent.com'; // Substitua pelo seu client ID do Google

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          {/* Rota para a página de Login */}
          <Route path="/" element={<LoginPage />} />
          
          {/* Rota para o Dashboard (página após login bem-sucedido) */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
