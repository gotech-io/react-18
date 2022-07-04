import React from 'react';
// React 18
import ReactDOM from 'react-dom/client';
// React 17
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
