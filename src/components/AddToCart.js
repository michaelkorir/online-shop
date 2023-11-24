import React, { useEffect, useState } from 'react';

const AddToCart = ({ setCart, fetchProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API using the function passed from App.js
    const fetchProductsData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    fetchProductsData();
    // eslint-disable-next-line
  }, [fetchProducts]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // If the product is already in the cart, do not update its quantity
        return prevCart;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}{' '}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;