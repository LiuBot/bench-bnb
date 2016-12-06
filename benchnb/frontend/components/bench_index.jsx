import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  render() {
    const {benches} = this.props;
    return(
      <div>
      <h1>Benches: </h1>
      <ul>
        {
          benches.map(bench =>(
            <BenchIndexItem key={bench.id} bench={bench} />
            )
          )
        }
      </ul>
      </div>
      )
  }
};

export default BenchIndex;

