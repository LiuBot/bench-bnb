import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({benches, fetchBenches, updateFilter}) =>( // pass props 
	<div
		className="search cf">
		<BenchMap 
			updateFilter={updateFilter}
			benches={benches} />
		<BenchIndex 
			benches={benches}
			fetchBenches={fetchBenches} />
	</div>
)

export default Search;