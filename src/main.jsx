// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';  // Inclui os estilos globais
import LoginPage from './LoginPage';

const clientId = '64141712421-0ck032kn9nes6bl3kg0sdk68s6brb73s.apps.googleusercontent.com'; // Substitua pelo seu client ID do Google

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <LoginPage />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
