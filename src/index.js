import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth';

const auth = new Auth();
let state = {};
window.setState = (change)=>{
    state = Object.assign({},state,change);

    ReactDOM.render(<App {...state}/>, document.getElementById('root'))
};

/*eslint no-restricted-globals: 0*/
let initialState = {
    name: "Miika",
    location: location.pathname.replace(/^\/?|\/S/g,""),
    auth
};

window.setState(initialState);

registerServiceWorker();