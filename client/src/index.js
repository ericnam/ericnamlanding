// all of our routing information in index.js
import './public/styles/style.css';
import './public/js/index.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App'
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

// render elements on the screen
ReactDOM.render(
	<Provider store={store}><App /></Provider>, 
	document.querySelector('#root')
);