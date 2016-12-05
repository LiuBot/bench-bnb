// Build and export a FilterReducer
// You're reducer should update the application state when an UPDATE_BOUNDS 
//action is dispatched
// Update your RootReducer
// Test that the application is being successfully updated by moving
// the map around and then calling store.getState() in the console.


import {UPDATE_BOUNDS} from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = {
	bounds:{}
}

const FiltersReducer = (state= _defaultFilters, action) =>{
	Object.freeze(state);

	switch(action.type) {
		case UPDATE_BOUNDS:
			const dupState = merge({}, {bounds: action.bounds})
			return dupState;
		default:
			return state;
	}
}

export default FiltersReducer;