import React from 'react';


const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img
        className="product-image"
        src={product.images}
        alt={product.title}
      />
      <p>{product.description}</p>
      <p className="product-price">${product.price}</p>
      <button className="product-button" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;