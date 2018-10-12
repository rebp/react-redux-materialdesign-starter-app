import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css'

import { BrowserRouter } from 'react-router-dom';

import store from './store';

import Routes from './routes'

const App = () => {
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.querySelector('#app'));
