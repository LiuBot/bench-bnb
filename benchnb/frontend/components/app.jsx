// Create and export a new functional component that renders an <h1> tag with "Bench BnB" 
// text and underneath renders props.children. 
import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
	<div>
		<h1>Bench BnB</h1>
		<GreetingContainer />
			{children}
	</div>
	)

export default App;