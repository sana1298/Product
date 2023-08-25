import React, { useState, useEffect } from "react";
import axios from "axios";

const api = "https://fakestoreapi.com/products";
const Product = () => {
  const [products, setProducts] = useState([]); // Store the fetched products
  const [search, setSearch] = useState(""); // Store the search query
  const [filteredProducts, setFilteredProducts] = useState([]); // Store the filtered products based on the search query

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setProducts(data);
        return data;
      
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
   
    setFilteredProducts(filterData);
  }, [search, products]);

  return (
    <div className="listSearch">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <div  className="unique">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} id="img" />
            <h2>Rs.{product.price}</h2>
            {/* <h2>{product.id}</h2>
            <h2>{product.category}</h2>
            <h2>{product.rating}</h2> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;