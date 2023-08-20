import React, { useState } from 'react';

const Item = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container_general bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at lectus id elit vestibulum
              porttitor. Vivamus sit amet ipsum vel ligula fringilla hendrerit.
            </p>
            <p className="text-2xl text-gray-900 mb-4">${product.price}</p>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleDecrement}
                className="bg-gray-300 text-gray-600 px-3 py-2 rounded-full focus:outline-none"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="bg-gray-300 text-gray-600 px-3 py-2 rounded-full focus:outline-none"
              >
                +
              </button>
              <button
                className="bg-[#4f9ee3] text-white px-4 py-2 rounded-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
