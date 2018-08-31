import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Authentication/Auth';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const auth = new Auth();
let state = {};
window.setState = (change)=>{
    state = Object.assign({},state,change);

    ReactDOM.render(<App {...state}/>, document.getElementById('root'))
};

window.setState(this.state);

registerServiceWorker();