import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
// import App from './App';
// import Login from './Login';
import Navigation from './Navigation'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';


const store = configureStore(window.__INITIAL_STATE__);
ReactDOM.render(<Provider store={store}>
    <Navigation />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
