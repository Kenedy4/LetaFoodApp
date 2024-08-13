import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated, handleLogout }) => {
    return (
        <nav className="navbar">
            <div className="logo">
                {/* <img src="public/assets/logo.png" alt="LetaFood Logo" /> */}
                <h1>LetaFood</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li>
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
