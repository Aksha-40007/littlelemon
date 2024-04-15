import React from 'react';
import NavLink from './NavLink';
import logo from '../assets/icons/Logo.svg';

const Footer = () => {

  const contactInfo = [
    { id: 'phone', text: 'Phone Number' },
    { id: 'email', text: 'Email' },
    { id: 'address', text: 'Address' }
  ];

  const socialMediaLinks = [
    { id: 'instagram', text: 'Instagram' },
    { id: 'linkedin', text: 'LinkedIn' },
    { id: 'pinterest', text: 'Pinterest' }
  ];
  return (
    <footer className="footer">
      <div className="one">
        <img src={logo} alt="Secondary Logo" />
      </div>
      <div className="two">
        <ul>
          <h5>Navigation</h5>
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About" />
          <NavLink to="/menu" text="Menu" />
          <NavLink to="/reservations" text="Reservations" />
          <NavLink to="/order" text="Order Online" />
          <NavLink to="/login" text="Login" />
        </ul>
      </div>
      <div className="three">
        <ul>
          <h5>Contact</h5>
          {contactInfo.map(item => (
            <li key={item.id}>
              <a id="nav" href="#">{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="four">
        <ul>
          <h5>Social Media</h5>
          {socialMediaLinks.map(item => (
            <li key={item.id}>
              <a id="nav" href="#">{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
