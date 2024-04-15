import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, text }) => {
  return (
    <li>
      <Link to={to} className="a">
        {text}
      </Link>
    </li>
  );
}

export default NavLink;
