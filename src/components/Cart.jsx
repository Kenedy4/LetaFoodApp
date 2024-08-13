import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleClearCart = () => {
    // Add logic to clear the cart
    setIsCheckoutOpen(false);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <h3>Total: Kes {totalAmount}</h3>
      <button onClick={handleCheckout}>Checkout</button>

      {/* Pop-up for checkout */}
      {isCheckoutOpen && (
        <div className="checkout-modal">
          <h3>Checkout Summary</h3>
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <span>{item.name} - ${item.price}</span>
            </div>
          ))}
          <h3>Total Amount: Kes {totalAmount}</h3>
          <button onClick={handleClearCart}>Confirm and Clear Cart</button>
          <button onClick={() => setIsCheckoutOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
