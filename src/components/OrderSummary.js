import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ items }) => {
  return (
    <div className="order-summary">
      <h2>Resumen del Pedido</h2>
      {items.map(item => (
        <div key={item.id} className="order-item">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <p>Total: {/* Calcula el total */}</p>
    </div>
  );
}

export default OrderSummary;