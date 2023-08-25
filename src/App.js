import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
