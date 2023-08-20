import React from "react";
import { NavLink } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <NavLink to="/Cart">
        <i className="material-icons text-3xl">shopping_cart</i>
      </NavLink>
      <span> </span>
    </div>
  );
};

