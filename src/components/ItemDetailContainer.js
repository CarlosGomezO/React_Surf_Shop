import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container_general bg-white">
      {product ? (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Item product={product} />
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
