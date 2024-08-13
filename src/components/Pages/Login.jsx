import React, { useState } from 'react';

const Login = ({ onSubmit }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [LoginData, setLoginData] = useState({
        username: '',
        password: '',
        email: '', // Used when crerating account
    });
    const [isOpen, setIsOpen] = useState(false); // To control the visibility of the login form

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(LoginData, isLogin);
        setIsOpen(false); // Close the form after submission
    };

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close Login' : 'Login'}
            </button>

            {isOpen && (
                <div className="login-form">
                    <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={LoginData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={LoginData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {!isLogin && (
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={LoginData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
                    </form>
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Need an account? Create one!' : 'Already have an account? Log in!'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
