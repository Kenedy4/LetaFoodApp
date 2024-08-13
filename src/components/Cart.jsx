import React from 'react';

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name} - kes{item.price}</span>
        </div>
      ))}
      <h3>Total: Kes{totalAmount}</h3>
    </div>
  );
};

export default Cart;
