import React from 'react';
import { useSelector } from 'react-redux';
import {  useDispatch } from 'react-redux';
import { removeFromCart } from './features/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} style={{ maxWidth: '20%', height: 'auto' }} />
          <p>{item.title}</p>
          <h4>${item.price}</h4>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
