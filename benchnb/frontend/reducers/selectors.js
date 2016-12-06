import _ from 'lodash';

export const selectAllBenches = state => _.values(state.benches);

export const selectBench = ({ benches}, id) => {
   const bench = benches[id] || {};
   return bench
}


