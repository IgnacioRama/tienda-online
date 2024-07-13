import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import './Products.css';

const Products = () => {
  const { products, loading } = useFetchProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  if (loading) {
    return <div className="products">Cargando productos...</div>;
  }

  return (
    <div className="products">
      <h1>Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={() => selectProduct(product)}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div className="product-details">
          <h2>Detalles del Producto</h2>
          <p>Nombre: {selectedProduct.name}</p>
          <p>Precio: ${selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default Products;