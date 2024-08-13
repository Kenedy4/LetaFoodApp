import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home'; 
import Login from './components/Pages/Login';
import MealCategory from './components/MealCategory';
import MealList from './components/MealList';
import Cart from './components/Cart';

const AppRoutes = ({ category, handleFilterMeals, addToCart, cartItems, removeFromCart, clearCart, isAuthenticated, handleLogin }) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={
        <div>
          <MealCategory filterMeals={handleFilterMeals} cartItems={cartItems} />
          <MealList category={category} addToCart={addToCart} />
        </div>
      } />
      <Route path="/cart" element={
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
      } />
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/home" /> : <Login handleLogin={handleLogin} />
      } />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;