import React from 'react';

class BenchMap extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
    // find the `<map>` node on the DOM
		const mapNode = this.refs.map;
		 const mapOptions = {

		 	//There are two required options for every map: center and zoom.
		//set the map to show SF
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    //wraps the mapDOMNode in a Google map
    this.map = new google.maps.Map(mapNode, mapOptions);
	}

	render(){
		return(
		//render function should return a div with id='map-container' and ref='map'.

		<div id='map-container' ref='map'></div>
			)
	}
}

export default BenchMap;