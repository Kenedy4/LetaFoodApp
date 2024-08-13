import React from 'react';

const MealCard = ({ meal, addToCart }) => {
  return (
    <div className="meal-card">
      <img src={meal.image} alt={meal.id} className='meal-image' />
      <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <p>Price: Kes.{meal.price}</p>
      <button onClick={() => addToCart(meal)}>Add to Cart</button>
    </div>
  );
};

export default MealCard;
