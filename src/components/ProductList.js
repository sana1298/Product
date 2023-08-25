import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} style={{
          maxWidth: '20%',
          height: 'auto',
        }}/>
            <h3>{product.title}</h3>
            <h4>${product.price}</h4>
            <Link to={`/products/${product.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
