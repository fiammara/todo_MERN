import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="NavContainer">
    <button type="button" className="NavButton">
      <NavLink to="/">Home</NavLink>
    </button>

    <button type="button" className="NavButton">
      <NavLink to="/todos"> Todo list</NavLink>
    </button>

    <button type="button" className="NavButton">
      <NavLink to="/archive">Archived</NavLink>
    </button>
  </div>
);

export default Header;
