import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../features/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);
  
 
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setAddedToCart(true);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="product-detail">
      <img src={product.image} alt={product.title}  style={{
          maxWidth: '20%',
          height: 'auto',
        }} />
      <h3>{product.title}</h3>
      <h4>${product.price}</h4>
      <p>{product.description}</p>
      {addedToCart ? (
            <p>Added to Cart</p>
          ) : (
            <button onClick={handleAddToCart}>Add to Cart</button>
          )}
    </div>
    </>
  );
};

export default ProductDetails;
