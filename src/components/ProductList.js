import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import {useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice.js';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title}  style={{
                width: '20%',
                height: 'auto',
              }} />
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <p>{product.description}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button><br />
            <Link to={`/products/${product.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
