import React from 'react';

const MealCategory = ({ filterMeals }) => {
  return (
    <div className="meal-categories">
      <button onClick={() => filterMeals('Breakfast')}>Breakfast</button>
      <button onClick={() => filterMeals('Lunch')}>Lunch</button>
      <button onClick={() => filterMeals('Supper')}>Supper</button>
    </div>
  );
};

export default MealCategory;
