// Create and export a new functional component that renders an <h1> tag with "Bench BnB" 
// text and underneath renders props.children. 
import React from 'react';
import App from './app'
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import SessionFormContainer from './session_form/session_form_container'

const Root = ({store}) => (
	<Provider store={store}>
		<Router history={hashHistory}>

			<Route path="/" component={App}>
				<Route path="/login" component={SessionFormContainer} />
				<Route path="/signup" component={SessionFormContainer} />
			</Route>

		</Router>
	</Provider>
)

export default Root;