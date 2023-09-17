import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext"; // Asegúrate de importar CartContext

export const CartWidget = () => {
  const { total } = useContext(CartContext); // Obtén la información del carrito del contexto

  return (
    <div>
      <NavLink to="/Cart">
        <i className="material-icons text-3xl ">shopping_cart</i>
      </NavLink>
      {total > 0 ? (
        <span>{total}</span>
      ) : (
        <span>0</span> 
      )}
    </div>
  );
};
