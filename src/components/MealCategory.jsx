import React from 'react';
import { Link } from 'react-router-dom';

const MealCategory = ({ filterMeals, cartItems }) => {
    return (
        <div className="meal-categories">
            <button onClick={() => filterMeals('Breakfast')}>Breakfast</button>
            <button onClick={() => filterMeals('Lunch')}>Lunch</button>
            <button onClick={() => filterMeals('Dinner')}>Dinner</button>
            <Link to="/cart" className="cart-button">
                Cart ({cartItems.length})
            </Link>
        </div>
    );
};

export default MealCategory;
