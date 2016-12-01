import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';


const _nullUser = {
	currentUser: null,
	errors: []
}

const SessionReducer = (state = _nullUser, action) =>{
	Object.freeze(state);

	switch(action.type){
		case RECEIVE_CURRENT_USER:
			const currentUser = action.user;
			return Object.assign({}, {currentUser}, _nullUser)

		case RECEIVE_ERRORS:
			const errors = action.errors;
			return Object.assign({}, {errors}, _nullUser)

		default:
			return state;
	}
}

export default SessionReducer;