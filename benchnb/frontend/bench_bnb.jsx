import ReactDOM from 'react-dom';
import React  from 'react';
import configureStore from './store/store';
// import {signup, login, logout} from './util/session_api_util';
// import {signup, login, logout} from './actions/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () =>{
	let store;

 // THIS LETS US STAY LOGGED IN//////////////////
	if (window.currentUser){ // this lets us stay logged in
		const preloadedState = { session: {currentUser: window.currentUser}}
		store = configureStore(preloadedState);
	} else {
		store = configureStore();
	}

	// window.store = store;
	// window.login = login;
	// window.logout = logout;
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store}/>, root);
})