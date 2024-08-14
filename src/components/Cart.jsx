import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        setIsCheckoutOpen(true);
    };

    const handleConfirmOrder = () => {
        alert("Thank you for shopping with us: delivery will be done within 2-3hrs");
        clearCart(); // Clear the cart
        setIsCheckoutOpen(false);
        navigate('/services'); // Redirect to MealList
    };

    return (
        <div className="cart">
            <h2>Here Your Meal Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total: Kes {totalAmount}</h3>
            <button onClick={handleCheckout}>Checkout</button>

            {/* Pop-up for checkout */}
            {isCheckoutOpen && (
                <div className="checkout-modal">
                    <h3>Checkout Summary</h3>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - Kes {item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: Kes {totalAmount}</h3>
                    <button onClick={handleConfirmOrder}>Confirm your Order</button>
                    <button onClick={() => setIsCheckoutOpen(false)}>Cancel Order</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
