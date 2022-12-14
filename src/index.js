import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import ThemeContextProvider from './contexts/ThemeContext';
import ChallangeContextProvider from './contexts/ChallangeContex';

const AppConnector = () => {
  return (
    <ThemeContextProvider>
      <ChallangeContextProvider>
        <App/>
      </ChallangeContextProvider>
    </ThemeContextProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppConnector/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
