import React from 'react';

const BenchIndexItem = ({bench}) =>{

		return(
			<div className="bench-index-item">
				<li key={bench.id}>
						<label>Description:</label>{bench.description}
						<br />
						<label>Latitude:</label> {bench.lat}
						<br />
						<label>Longitude:</label> {bench.lng}
				</li>
			</div>
			)
}



export default BenchIndexItem;