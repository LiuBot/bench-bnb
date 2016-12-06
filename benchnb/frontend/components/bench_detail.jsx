import React from 'react';
import { Link } from 'react-router';

const BenchDetail = ({ bench }) => (
  <div>
    <ul className="bench-list">
      <li>Description: {bench.description}</li>
      <li>Seats: {bench.seating}</li>
      <li>Latitude: {bench.lat}</li>
      <li>Longitude: {bench.lng}</li>
    </ul>
    <br/>
    
  </div>
);

export default BenchDetail;