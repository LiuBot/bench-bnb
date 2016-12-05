import React from 'react';

class BenchIndex extends React.Component {
  render() {
   	const {benches} = this.props;
   	return(
   		<div
        className="bench-index">
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

