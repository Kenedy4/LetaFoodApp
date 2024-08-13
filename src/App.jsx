import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MealCategory from './components/MealCategory';
import MealList from './components/MealList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [category, setCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleFilterMeals = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const addToCart = (meal) => {
    setCartItems([...cartItems, meal]);
  };

  return (
    <div className="App">
      <NavBar />
      <MealCategory filterMeals={handleFilterMeals} />
      <MealList category={category} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <Footer />
    </div>
  );
}

export default App;
