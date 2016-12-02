// Greeting

// If the user is logged in, then the Greeting should contain:

// A welcome message including the user's username
// A button to logout
// If the user is not logged in, then the Greeting should contain:

// A <Link to> /#/signup
// A <Link to> /#/login
// Update your App component so that it renders the GreetingContainer above other content.

import React from 'react';
import {Link} from 'react-router';

const Greeting = ({currentUser, logout}) => {

	if (currentUser){
		return (
			<div>
				Welcome, {currentUser.username}!
				<button onClick={logout}>Logout</button>
			</div>
				)
	} else {
			return (
				<div>
					<p>
						<Link to={'/login'}>Login</Link> or <Link to={'/signup'}>Signup</Link>
					</p>
				</div>
				)
	}
}

export default Greeting;