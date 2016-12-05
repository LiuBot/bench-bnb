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
    // idle listener
    this.map = new google.maps.Map(mapNode, _mapOptions);

    this.map.addListener('idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const boundsFilter = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } }
      this.props.updateFilter('bounds', boundsFilter);
    });
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