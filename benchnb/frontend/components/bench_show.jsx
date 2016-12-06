import React from 'react';
import { Link } from 'react-router';
import BenchMap from './bench_map';
import BenchDetail from './bench_detail';

const BenchShow = ({bench, benchId, fetchBench}) =>{
	 const benches = {
    [benchId]: bench
  };

return (
	<div>
  <BenchMap benches={benches}
          benchId={benchId}
          singleBench={true}
          fetchBench={fetchBench} />

  <div className="right-half">
	<Link to="/">Back to Benches Index</Link>
   	   <BenchDetail bench={bench} />
    </div>
   </div>
	)
}

export default BenchShow;