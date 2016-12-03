import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, fetchBenches}) =>( // pass props 
	<div>
		<BenchIndex 
			benches={benches}
			fetchBenches={fetchBenches} />
		<BenchMap benches={benches}/>
	</div>
)

export default Search;