import React from 'react';
import NavLink from './NavLink';
import logo from '../assets/icons/Logo.svg';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <nav className='navbar'>
        <ul>
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About" />
          <NavLink to="/menu" text="Menu" />
          <NavLink to="/reservations" text="Reservations" />
          <NavLink to="/order" text="Order Online" />
          <NavLink to="/login" text="Login" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
