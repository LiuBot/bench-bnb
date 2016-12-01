import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';


const RootReducer = combineReducers({
	session: sessionReducer
})

export default RootReducer;