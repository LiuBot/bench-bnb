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
		let {benches, fetchBench, singleBench, bench} = this.props;

		let _mapOptions = {
			center: { lat: 37.7758, lng: -122.435 }, // this is SF
			zoom: 13
		}
    // idle listener
    // if (singleBench){
    //   console.log(bench)
    //   this.map = new google.maps.Map(mapNode, {center: {
    //     lat: bench.lat,
    //     lng: bench.lng}, 
    //   zoom: 13}); // constructor for a map
    // } else {
      this.map = new google.maps.Map(mapNode, _mapOptions); // constructor for a map

    // }
  

    this.MarkerManager = new MarkerManager(this.map)

    if (singleBench) {
        fetchBench(this.props.benchId)
    } else {
      this._activateListeners();
      this.MarkerManager.updateMarkers(benches);
    }
	}

  _activateListeners(){
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
    }

	 handleClick(coords){
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

	componentDidUpdate(){
		let {benches, singleBench} = this.props;

    if(singleBench){
     this.MarkerManager.updateMarkers(
     // grabs just the one bench
      [this.props.benches[Object.keys(this.props.benches)[0]]]
     )
   } else{
		this.MarkerManager.updateMarkers(benches);
   }
	}


	render(){
		return(
		//render function should return a div with id='map-container' and ref='map'.
		<div id='map-container' ref='map'></div>
			)
	}
}

export default withRouter(BenchMap);