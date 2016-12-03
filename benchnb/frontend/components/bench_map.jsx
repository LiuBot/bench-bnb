import React from 'react';

class BenchMap extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
		//render function should return a div with id='map-container' and ref='map'.

		<div id='map-container' ref='map'>
		</div>
			)
	}
}

export default BenchMap;