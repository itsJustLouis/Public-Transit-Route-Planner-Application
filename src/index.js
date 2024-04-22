import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.scss'
import App from './App';
import { CartProvider } from './components/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* i dont know how i ended up here but thanks to chatgpt, because i have been getting an error and used it to trouble shoot */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);