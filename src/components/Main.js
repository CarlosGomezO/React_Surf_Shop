import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Items/ItemDetailContainer';
import Cart from "./cart/Cart"
import Checkout from './checkout/Checkout';
import {ItemListContainer} from "./Items/ItemListContainer";

export const Main = () => {
  return (

    <main className="container_general">

     
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      
    </main>
  );
};

