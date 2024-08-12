import React from 'react';

const MealCard = ({ meal, addToCart }) => {
  return (
    <div className="meal-card">
      <h3>{meal.name}</h3>
      <p>Price: Kes.{meal.price}</p>
      <button onClick={() => addToCart(meal)}>Add to Cart</button>
    </div>
  );
};

export default MealCard;
