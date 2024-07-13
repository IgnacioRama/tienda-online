import React from 'react';
import OrderSummary from './OrderSummary';
import './Cart.css';

const mockCartItems = [
  { id: 1, name: 'Producto 1', price: '$10' },
  { id: 2, name: 'Producto 2', price: '$20' },

];

const Cart = () => {
  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      <OrderSummary items={mockCartItems} />
    </div>
  );
}

export default Cart;