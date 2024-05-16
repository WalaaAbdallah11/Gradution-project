import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// ward
import "./Css/Loading.css";
import "./Css/button.css";
import "./Css/card.css";
import "./Css/alerts.css";
import "./Css/sign.css";
import "./all.min.css";
import "./Css/profile.css";
// ******************
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// ward
// import { BrowserRouter as Router } from 'react-router-dom';
import MenuContext from './Context/MenuContext';
import WindowContext from './Context/WindowContext';
// import EmailProvider from './Pages/Context/EmailContext';
// ******************

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // walaa
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // **********
  <React.StrictMode>
    <WindowContext>
    <MenuContext>
    {/* <EmailProvider> */}
    {/* <Router> */}
    < App />
    {/* </Router> */}
    {/* </EmailProvider> */}
    </MenuContext>
    </WindowContext> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
