import React from 'react';
import ReactDOM from 'react-dom/client';
// styles
import './index.css';
import Router from './shared/router/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
);
