import React from 'react';

const ItemDetail = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container_general bg-white">
      {/* Mostrar detalles del producto aquí */}
    </div>
  );
};

export default ItemDetail;

