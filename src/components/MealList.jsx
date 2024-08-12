import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';

const MealList = ({ category, addToCart }) => {
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/meals')
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          setFilteredMeals(data.filter((meal) => meal.category === category));
        } else {
          setFilteredMeals(data);
        }
      });
  }, [category]);

  return (
    <div className="meal-list">
      <div className="meal-cards">
        {filteredMeals.map((meal) => (
          <MealCard key={meal.id} meal={meal} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MealList;
