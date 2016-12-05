export default class MarkerManager {
	constructor(map){ // accepts a map
//Define the constructor method to accept a map, and then create map and markers instance variables.
		this.map = map; // pass in map
		this.markers = []; 
		this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
		this._markersToRemove = this._markersToRemove.bind(this);
		this._removeMarker = this._removeMarker.bind(this);
	}

		//Use your helper methods in updateMarkers() to create markers for any new
		// benches that appear in your store. Take care to only add a marker once 
		//per bench.
	updateMarkers(benches){
		this.benches = benches;
		console.log('time to update');
		this._benchesToAdd().forEach(this._createMarkerFromBench);
		this._markersToRemove().forEach(this._removeMarker); 
	}

	//returns an array of benches that are in the state, but not already on the map.
	_benchesToAdd(){
	  const currentBenches = this.markers.map( marker => marker.benchId );
    return this.benches.filter( bench => !currentBenches.includes(bench.id) );
	}

	_markersToRemove(){
		const benchIds = this.benches.map(bench => bench.id); // array of all the bench ids 
		// return the markers whose benchId is not included in the bench ids??
		return this.markers.filter(marker => !benchIds.includes(marker.benchId))
		 // const currentBenches = this.markers.map( marker => marker.benchId );
   //  return this.benches.filter( bench => currentBenches.includes(bench.id) );
	}

	_removeMarker(marker){
		this.markers = _.without(this.markers, marker); // removes marker from markets list
		marker.setMap(null);  // removes marker from map
	}


	//accepts a bench object as an argument; adds a marker to the map and to the markers array.
	_createMarkerFromBench(bench){

		var myLatLng = {
		lat: bench.lat, 
		lng: bench.lng
		}

		var benchMarker = new google.maps.Marker({
			position: myLatLng,
			map: this.map,
			benchId: bench.id,
			title: bench.description
		})

		benchMarker.setMap(this.map);
		this.markers.push(benchMarker); // push it into the markers that have been marked
		}
	}