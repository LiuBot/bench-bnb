import React from 'react';
import MarkerManager from '../util/marker_manager';
import {withRouter} from 'react-router';


const _getCoordObj = (latLng) =>({
	lat: latLng.lat(),
	lng: latLng.lng()
})

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
      const bounds = this.map.getBounds();
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();

      let boundsFilter = {
        southWest: {lat: sw.lat(), lng: sw.lng()},
        northEast: {lat: ne.lat(), lng: ne.lng()}
      };

      this.props.updateFilter('bounds', boundsFilter);
    });

    google.maps.event.addListener(this.map, 'click', event =>{
    	// LatLng = the latitude/longitude that was below the cursor when the event occurred.
    	const coords = _getCoordObj(event.latLng);
    	this.handleClick(coords);
    })
   // idle listener
    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(benches);
	}

	 handleClick(coords){
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
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

export default withRouter(BenchMap);