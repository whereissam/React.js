import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //React.StrictMode用於進行檢查
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//用於進行性能測試
// reportWebVitals(); 
