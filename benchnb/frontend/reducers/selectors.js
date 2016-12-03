import _ from 'lodash';

export const selectAllBenches = state => _.values(state.benches);