import React from 'react';

class BenchIndex extends React.Component {
	constructor(props){
		super(props);
	}

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
   	let {benches} = this.props;
   	return(
   		<div>
   		<h1>Benches: </h1>
   		<ul>
   			{
   				benches.map(bench =>(
   					<li key={bench.id}>{bench.description}
   					</li>
   					)
   				)
   			}
   		</ul>
   		</div>
   		)
  }
};

export default BenchIndex;