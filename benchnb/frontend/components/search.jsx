import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({benches, fetchBenches, updateBounds}) =>( // pass props 
	<div>
		<BenchMap 
			updateBounds={updateBounds}
			benches={benches} />
		<BenchIndex 
			benches={benches}
			fetchBenches={fetchBenches} />
	</div>
)

export default Search;