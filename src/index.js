import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Welcome,Greeting,PI} from './component/Welcome'
import Mycomponent from './component/Welcome'

// import Component,{Welcome,Greeting,PI} from './component/Welcome';
function App1(){
  return <div>Hello React 555+</div>
}
ReactDOM.render(
  <React.StrictMode>
    <Welcome />
    <Greeting/>
    <Mycomponent/>
    {/* <PI/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
