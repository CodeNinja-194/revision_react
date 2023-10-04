import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Greet from './Components/Greet';
import Counter from './Components/Counter';
import Msg from './Components/Message';
import ClassClick from './Components/ClassClick';
import reportWebVitals from './reportWebVitals';
import State1 from './Components/state1';
import EventBind from './Components/EventBind';
import Func from './Components/Func';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <center><Greet/></center> */}
    <State1/>
    <center><Msg/></center>
    <br/>
    <br/>
    <br/>
    <center><Counter/></center>
    <br/>
    <br/>
    <center><ClassClick/> </center>
    <br/>
    <br/>
    <center><EventBind/></center>
    <br/>
    <br/>
    <Func/>
    
  </React.StrictMode>
);

reportWebVitals();
