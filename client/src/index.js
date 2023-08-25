import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { default as Login } from './pages/Login';
import { default as Register } from './pages/Register';
import { default as Welcome } from './pages/Welcome';
import { default as Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>

      <App />


    </BrowserRouter>
);






