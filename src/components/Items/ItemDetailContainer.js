import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../db/firebase";
import { CartContext } from "../cart/CartContext";
import { PacmanLoader } from 'react-spinners';
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const [selectedQuantity, setSelectedQuantity] = useState(1); // Agrega un estado para la cantidad seleccionada

  const handleItemCountChange = (quantity) => {
    // Actualiza la cantidad seleccionada
    setSelectedQuantity(quantity);
  };

  useEffect(() => {
    setLoading(true);

    const docDetail = doc(db, "Products", id);

    getDoc(docDetail)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, selectedQuantity); // Agrega el producto al carrito con la cantidad seleccionada
    }
  };

  if (loading) {
    return (
      <>
        <h1 className="text-center py-4 text-5xl bg-[#F3F4F6]">
          Loading...
        </h1>
        <div className="my-5 flex justify-center">
          <PacmanLoader color="#36D7B7" size={50} />
        </div>
      </>
    );
  } else {
    return (
      <div className="container_general bg-white">
        {product ? (
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Item product={product} />
            <ItemCount stock={product.stock} onAdd={handleItemCountChange} />
            <button
              onClick={handleAddToCart}
              className="bg-[#4f9ee3] text-white px-4 py-2 rounded-full"
            >
              Agregar al carrito
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
};

export default ItemDetailContainer;
