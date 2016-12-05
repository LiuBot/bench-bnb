// Create and export a new functional component that renders an <h1> tag with "Bench BnB" 
// text and underneath renders props.children. 
import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app'
import SessionFormContainer from './session_form/session_form_container';
// import BenchIndexContainer from './bench_index_container'
import SearchContainer from './search_container'

// Define a _redirectIfLoggedIn helper method in your Root component. 
//It should:
// Check to see if the application state has a currentUser property.
// If true, replace the path with "/".
// Otherwise, do nothing.
// Add an onEnter prop to the Routes we want to protect.
// Remember, we want to redirect users from "/#/login" and "/#/signup" if they are already logged in.

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/'); // redirects you to the root page if you try to go to the log out or sign up form
  }
}
	return(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={SearchContainer} />
				<Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
				<Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
			</Route>

		</Router>
	</Provider>
	)
}
export default Root;