import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
const Global = createGlobalStyle`
body{
  font-size: 24px;
  padding: 0 20px;
}
img{
  display: block;
}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/goit-react-hw-05-movies'>
    <React.StrictMode>
    <App />
    <Global/>
  </React.StrictMode>
  </BrowserRouter>
);
