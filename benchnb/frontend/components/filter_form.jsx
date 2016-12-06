import React from 'react';
import {withRouter} from 'react-router';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
)

const FilterForm = ({minSeating, maxSeating, updateFilter}) =>(
  		<div className="filter-form">

          <h4>Filter results</h4>

				    <label>Minimum seats:
	            <input 
	              type="number"
	              value={minSeating}
	              defaultValue="1"
	              onChange={handleChange('minSeating', updateFilter)}
	            />
	          </label> 	
	          <br />

	          <label>Maximum seats:
	            <input 
	              type="number"
	              defaultValue="10"
	              value={maxSeating}
	              onChange={handleChange('maxSeating', updateFilter)}
	            />
	          </label> 

      </div>

	)

  


export default withRouter(FilterForm);