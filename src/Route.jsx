import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import MealCategory from './components/MealCategory';
import MealList from './components/MealList';

const AppRoutes = ({ category, handleFilterMeals, addToCart, isAuthenticated, handleLogin }) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={
        <div>
          <MealCategory filterMeals={handleFilterMeals} />
          <MealList category={category} addToCart={addToCart} />
        </div>
      } />
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/home" /> : <Login handleLogin={handleLogin} />
      } />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
