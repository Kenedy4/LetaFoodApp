import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>LetaFood</h1>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#contactus">Contact Us</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
