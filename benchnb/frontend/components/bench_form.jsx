// This will dispatch new action types 

// Uses controlled inputs to keep track of its form data 

import React from 'react'; 
// import {withRouter} from 'react-router';
// Since our BenchMap will need access to the Router, import the withRouter function
// from react-router. Change the export statement in bench_map.jsx so that we are exporting a wrapped component.

class BenchForm extends React.Component{


	constructor(props){ //provide a default internal state to your form
		super(props);
      // this.coords = {
      //   latitude:
      //   longitude: 
      // }
      this.coords = {lat: props.lat, lng: props.lng}
  		this.state = {
  			description: "",
        seating: 2,
  		};
  	 this.createBench = this.createBench.bind(this); // no autobinding in ES6 so need to do this
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  createBench(e){
  	e.preventDefault();
    const bench = Object.assign({}, this.state)
  }

  // errors(e){
  //   let {errors} = this.props;
  //   if (errors){
  //     errors.map((error,idx) => {
  //       return (
  //         <li 
  //         className="error"
  //         key={idx}>{error}</li>)
  //     })
  //   } else {
  //     return "";
  //   }
  // }

  render(){
  	let {description, seating} = this.state; // so you don't have to keep calling this.state.title, etc.

  	return(
      <div className="bench-form">

        <form
          onSubmit={this.createBench}>
          <h3>Create a bench!</h3>

          <label>Description:
            <input 
              type="text"
              value={description}
              onChange={this.update('description')}/>
          </label>  

          <br />   

           <label>Number of Seats
            <input 
              type="integer"
              value={seating}
              onChange={this.update('seating')}/>
          </label>

          <br />
           <label>Latitude:
            <input 
              type="number"
              defaultValue={this.coords.lat}
              disabled
            />
          </label>

          <br />

           <label>Longitude:
            <input 
              type="number"
              defaultValue={this.coords.lng}
              disabled
            />
          </label>

          <br />

          <button>Create Bench</button>

        </form>

      </div>
      )
  }

}

export default BenchForm;