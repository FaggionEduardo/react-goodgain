import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Scrollbar from 'smooth-scrollbar'

var options={
  damping:0.01,
  speed:0.1,
  syncCallbacks: true,
  continuousScrolling:true
}


var scrollbar=Scrollbar.init(document.getElementById('scroll'), options);

// eslint-disable-next-line 
if ('scrollRestoration' in history) {
// eslint-disable-next-line 
  history.scrollRestoration = 'manual';
}



ReactDOM.render(
 
  <App />
  
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
