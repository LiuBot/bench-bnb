import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		let {benches} = this.props;

    // find the `<map>` node on the DOM
		const mapNode = this.refs.map;
		 const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    //wraps the mapDOMNode in a Google map
    this.map = new google.maps.Map(mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(benches);
	}

	componentDidUpdate(){
		let {benches} = this.props;
		this.MarkerManager.updateMarkers(benches);
	}

	render(){
		return(
		//render function should return a div with id='map-container' and ref='map'.

		<div id='map-container' ref='map'></div>
			)
	}
}

export default BenchMap;