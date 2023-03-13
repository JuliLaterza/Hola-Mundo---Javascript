import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './intro-app';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const Li = ({ children, estado }) => {
  console.log(children, estado)
  return (
    <li> {children} es {estado} </li>
  )
}

const X = () =>
  <ul>
    <Li
      children={"Pepe"}
      estado={"Feliz"}    
    ></Li>
    <Li
      children={"Juan"}
      estado={"Triste"}
    >
    </Li>
    <Li
      children={"Maria"}
      estado={"Enojada"}
    >


    </Li>
  </ul>
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<X />);
  */






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
