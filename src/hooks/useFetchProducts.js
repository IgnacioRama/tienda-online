import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setTimeout(() => {
        const productList = [
          { id: 1, name: 'Producto 1', price: 10 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 3, name: 'Producto 3', price: 30 },
        ];
        setProducts(productList);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchProducts;