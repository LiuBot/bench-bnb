import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';
import FilterForm from './filter_form';

const Search = ({benches, fetchBenches, updateFilter}) =>( // pass props 
	<div
		className="search cf">

		<h4 className="map-instruction">Click map to add a bench!</h4>
		<BenchMap 
			updateFilter={updateFilter}
			benches={benches} 
			singleBench={false}/>
		<div className="right-half">	
		<FilterForm
			updateFilter={updateFilter}
		/>
		<BenchIndex 
			benches={benches}
			fetchBenches={fetchBenches} />
	</div>
	</div>
)

export default Search;