import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Navigation(props, context) {
  return (
  	<div>
  		<ul>
  			<li><Link to="/home">Home</Link></li>
  			<li><Linkt to="/">Posts>/Link></li>
  			<li><Link to="/about">About</Link></li>
  		</ul>
  	</div>
  );
}

// Navigation.propTypes = {
// };

export default Navigation;
