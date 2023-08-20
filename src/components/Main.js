import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

export const Main = () => {
  return (

    <main className="container_general">

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

    </main>
  );
};

