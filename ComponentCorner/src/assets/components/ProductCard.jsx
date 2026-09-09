// build a ProductCard component that accepts props for product details (name, price, image, description)
//  and renders them in a structured format.

import React from 'react';

// Import the ProductCard.css
import './ProductCard.css';

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;