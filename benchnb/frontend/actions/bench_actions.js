// Write receiveBenches. It should accept a single argument, benches, and produce an 
// action with type "RECEIVE_BENCHES" and a benches property that represents all of our bench data.

// Write fetchBenches. It doesn't need to accept any arguments. 
// It should just return a thunk which calls the APIUtil and then dispatches receiveBenches
// Don't forget to defined the corresponding action types.
// Export fetchBenches and your constants.
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

import * as APIUtil from '../util/bench_api_util';


export function fetchBenches(filters) {
  return (dispatch) => {
    return APIUtil.fetchBenches(filters) // calls the APIUtil 
      .then(benches => dispatch(receiveBenches(benches)));
  }
}


export const receiveBenches = (benches) => ({
	type: RECEIVE_BENCHES,
	benches
})
// Write fetchBenches. It doesn't need to accept any arguments.
//  It should just return a thunk which calls the APIUtil and then dispatches receiveBenches
// Don't forget to defined the corresponding action types.