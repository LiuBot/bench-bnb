import React from 'react';

const BenchIndexItem = ({bench}) =>{

		return(
			<div className="bench-index-item">
				<li key={bench.id}>
						<label>Description:</label>{bench.description}
				</li>
			</div>
			)
}



export default BenchIndexItem;