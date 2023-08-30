import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from './features/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.id));
  };

  return (
    <>
      <h2>Cart</h2>
      <div className='cart-list'>
        {cartItems.map(item => (
          <div key={item.id} className='cart'>
            <img src={item.image} alt={item.title} style={{ maxWidth: '20%', height: 'auto' }} />
            <p>{item.title}</p>
            <h4>${item.price * item.quantity}</h4>
            <h5>Quantity: {item.quantity}</h5>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => handleDecrement(item)}>-</button>
            <Link to={`/products/${item.id}`} className="product-details-link">Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
