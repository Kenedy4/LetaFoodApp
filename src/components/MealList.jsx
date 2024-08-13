import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';

const MealList = ({ category, addToCart }) => {
  const [allMeals, setAllMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await Promise.all([
          fetch('http://localhost:3001/breakfast'),
          fetch('http://localhost:3001/lunch'),
          fetch('http://localhost:3001/dinner'),
        ]);

        const [breakfastData, lunchData, dinnerData] = await Promise.all(
          response.map((res) => res.json())
        );

        // Combine all meals into a single array
        const combinedMeals = [
          ...breakfastData.map((meal) => ({ ...meal, category: 'Breakfast' })),
          ...lunchData.map((meal) => ({ ...meal, category: 'Lunch' })),
          ...dinnerData.map((meal) => ({ ...meal, category: 'Dinner' })),
        ];

        setAllMeals(combinedMeals);

        setFilteredMeals(combinedMeals); // Display all meals initially
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  useEffect(() => {
    if (category) {
      setFilteredMeals(allMeals.filter((meal) => meal.category === category));
    } else {
      setFilteredMeals(allMeals);
    }
  }, [category, allMeals]);

  return (
    <div className="meal-list">
      <div className="meal-cards">
        {filteredMeals.map((meal) => (
          <MealCard
            key={`${meal.category}-${meal.id}`} 
            meal={meal}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MealList;
