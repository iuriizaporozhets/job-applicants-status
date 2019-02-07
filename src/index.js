import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppRoot from './components/AppRoot/AppRoot';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<AppRoot />
	</Provider>,
	document.getElementById('root')
);
