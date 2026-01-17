import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 29999, inStock: true, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop' },
    { id: 2, name: "Phone", price: 17999, inStock: false, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop' },
    { id: 3, name: "Earbuds", price: 2199, inStock: false, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop' },
    { id: 4, name: "Smartwatch", price: 1299, inStock: true, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop' },
    { id: 5, name: "Tablet", price: 30499, inStock: false, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=200&fit=crop' },
    { id: 6, name: "Camera", price: 20899, inStock: true, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop' }
  ]);

  // TODO: Implement state to manage filtering
  const [filter, setFilter] = useState("all")

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter((product) => {
    if (filter === "inStock") {
      return product.inStock === true;
    } else if (filter === "outOfStock") {
      return product.inStock === false;
    } else {
      return true;
    }
  });

  return (
    <div>
      <h1 id='header'>Product Dashboard</h1>

      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("inStock")}>In Stock</button>
      <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>
      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
