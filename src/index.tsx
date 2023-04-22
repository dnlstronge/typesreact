import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import Routes from './routes';


let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <Routes/>
  </React.StrictMode>,
);

///////////
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );