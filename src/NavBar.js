import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const NavBar = () => {
  const cartItems = useSelector(state => state.cart); 
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
