import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import MealCategory from './components/MealCategory';
import Footer from './components/Footer';
import AppRoutes from './Route';

function App() {
    const [category, setCategory] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleFilterMeals = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const addToCart = (meal) => {
        setCartItems([...cartItems, meal]);
    };

    const removeFromCart = (meal) => {
        setCartItems(cartItems.filter((item) => item.id !== meal.id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="App">
                <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
                <MealCategory filterMeals={handleFilterMeals} cartItems={cartItems} />
                <AppRoutes
                    category={category}
                    handleFilterMeals={handleFilterMeals}
                    addToCart={addToCart}
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                    isAuthenticated={isAuthenticated}
                    handleLogin={handleLogin}
                />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
