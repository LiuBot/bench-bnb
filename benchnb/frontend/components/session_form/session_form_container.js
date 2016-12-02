import {connect} from 'react-redux';
import {login, signup, logout} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}) => ({
	loggedIn: Boolean(session.currentUser),
	errors: session.errors
})

const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.location.pathname.slice(1);
	//  use .slice(1) to get rid of slash sign 
	const processForm = (formType === 'signup') ? signup : login;

	return {
		processForm: (user) => dispatch(processForm(user)),
		formType // formType payload added 
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(SessionForm)
