import React from 'react';
import {withRouter} from 'react-router';

class BenchIndexItem extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
    const benchId = this.props.bench.id;
    this.props.router.push(`benches/${benchId}`);
  }

	
	render(){
		const {description} = this.props.bench;

	return(
			<div className="bench-index-item"
				onClick={this.handleClick}>
				
				<li key={this.props.bench.id}>
						<label>Description:</label>{description}
				</li>
			</div>
			
		)
	}
}



export default withRouter(BenchIndexItem);