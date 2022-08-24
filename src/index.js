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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
