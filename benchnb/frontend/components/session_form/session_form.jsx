
import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
  	return e => this.setState({[property]: e.target.value});
  }

  componentDidUpdate() { // this is a lifecycle method used to perform 
  	//DOM operations after the data has been updated 
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/"); // back to root page
		}
	}

  handleSubmit(e) {
  	e.preventDefault;
  	// Redirect the user to the /#/ route if they are logged in.
  		this.props.processForm(Object.assign({}, this.state))
  }

  navLink(){
  	let {formType} = this.props;

  	if (formType === "login"){
  		return <Link to="/signup">Sign up instead</Link>
  	} else {
    		return <Link to="/login">Login instead</Link>
  	}
  }


  renderErrors(e){
  	let {errors} = this.props;

  	return(
			<ul>
  			{errors.map((error, idx) => (
					<li className="error"key={idx}>{error}</li>
  			))}
  			</ul>
  			)
  		}
				
  render(){
  	let {processForm, formType} = this.props;
  	let {username, password} = this.state;

  	return(
  		<div>

	  		<form
	  			className="session-form"
	  			onSubmit = {this.handleSubmit}>

  			Welcome to BenchBnB!
  			<br />

	  		<h3>Please {formType} or {this.navLink()}</h3>

	  		{this.renderErrors()}

	  	<div className="login-box">
	  		<label>Username:
	  		<input type='text'
	  		value={username}
	  		placeholder="Username"
	  		onChange={this.update('username')} />
	  		</label>
	  		<br />

	  		<label>Password:
	  		<input type='password'
	  		value={password}
	  		placeholder="Password"
	  		onChange={this.update('password')} />
	  		</label>
	  		<br />

	  		<button
	  		className="session-button">Come on in!</button>
	  			</div>
				</form>
  		</div>
		)
  }

}

export default withRouter(SessionForm);