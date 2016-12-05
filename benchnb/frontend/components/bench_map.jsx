import React from 'react';
import MarkerManager from '../util/marker_manager';


class BenchMap extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const mapNode = this.refs.map;
		let {benches} = this.props;

		let _mapOptions = {
		center: { lat: 37.7758, lng: -122.435 }, // this is SF
		zoom: 13
		}
    // find the `<map>` node on the DOM
    // idle listener
    this.map = new google.maps.Map(mapNode, _mapOptions);
    this.map.addListener('idle', () => {
		  const mapBounds = this.map.getBounds(); // getBounds returns the lat/lng bounds of the current viewport.
		  
			const ne = mapBounds.getNorthEast();
			const sw = mapBounds.getSouthWest();

			const bounds = {
				southWest: {lat: sw.lat(), lng: sw.lng()},
				northEast: {lat: ne.lat(), lng: ne.lng()}
			}

    	this.props.updateBounds(bounds)

    })
   // idle listener
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