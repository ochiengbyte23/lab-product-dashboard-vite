import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onDelete }) => {
  // TODO: Check if the product list is empty and display a message if needed
  if (products.length === 0) {
    return <div>No products found</div>
  }
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        padding: '10px'
      }}>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {products.map(product => {
        return <ProductCard key={product.id} product={product} onDelete={onDelete} />
      })}
    </div>
  );
};

export default ProductList;
