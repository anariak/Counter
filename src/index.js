import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let counts=0;

setInterval( ()=> {
    ReactDOM.render(counts, document.getElementById('root'));
    counts++;
    
    let numero = counts;
    numero.tostring();
    if(numero.length > 1){

    }
},1000);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
