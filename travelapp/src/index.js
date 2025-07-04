import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // <-- यहाँ Tailwind की CSS import होती है
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
