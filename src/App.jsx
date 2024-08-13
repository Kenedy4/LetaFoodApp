import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Route from './Route';

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
        <Route
          category={category}
          handleFilterMeals={handleFilterMeals}
          addToCart={addToCart}
          isAuthenticated={isAuthenticated}
          handleLogin={handleLogin}
        />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
