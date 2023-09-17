import React from 'react';

const ItemDetail = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container_general bg-white">
      {/* Muestra los detalles del producto aquí */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: ${product.stock}</p>


    </div>
  );
};

export default ItemDetail;
