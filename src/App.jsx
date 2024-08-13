import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MealCategory from './components/MealCategory';
import MealList from './components/MealList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Pages/Login'; 


function App() {
  const [category, setCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const filterMeals = (category) => {
    setCategory(category);
  };
  const handleSubmit = (data) => {
    // Handle the Login submission data
    console.log('Login submitted:', data);
};


  const addToCart = (meal) => {
    setCartItems([...cartItems, meal]);
  };

  return (
    <div className="App">
      <NavBar />
      <MealCategory filterMeals={filterMeals} />
      <MealList category={category} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <Footer />
      <Login onSubmit={handleSubmit} /> 
    </div>
  );
}


export default App;