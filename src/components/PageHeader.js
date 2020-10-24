import { NavLink } from 'react-router-dom';
import React from 'react';
const Header = props => (
    <div>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expesne</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
  );
  export default Header;