import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onDelete }) => {
  const cardClassName = product.inStock
    ? styles.productCard
    : `${styles.productCard} ${styles.outOfStockClass} outOfStockClass`;
  return (
    <div className={cardClassName} >
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      <img src={product.image} alt={product.name} />

      {/* TODO: Display product name */}
      <h3 className={styles.productName} >{product.name}</h3>
      {/* TODO: Display product price */}
      <p className={styles.productPrice} >Sh.{product.price} </p>
      {/* TODO: Show if the product is in stock or out of stock */}
      <p className={product.inStock ? styles.inStock : styles.outOfStockText}>
        {product.inStock ? "InStock" : "OutOfStock"}
      </p>

      <button onClick={() => onDelete(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;