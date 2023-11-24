import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.map((item, index) => (
          <div className="product-card" key={index}>
            <h3>{item.title}</h3>
            <img className="product-image" src={item.images} alt={item.title} />
            <p>{item.description}</p>
            <p className="product-price">${item.price}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;