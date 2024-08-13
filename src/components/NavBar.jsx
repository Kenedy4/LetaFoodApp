import React, { useState } from 'react';
import Login from './Pages/Login';
 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [loginData, setLoginData] = useState({}); // State to hold login data

  const handleLoginSubmit = (data, isLogin) => {
    // Handle login or account creation logic here
    console.log(data, isLogin);
    // Example: set logged in state
    setIsLoggedIn(true);
    setLoginData(data);
  };

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
        <li>
          <Login onSubmit={handleLoginSubmit} />
        </li>
        {isLoggedIn && <li><a href="#logout">Logout</a></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
