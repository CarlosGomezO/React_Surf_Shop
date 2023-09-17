import React from "react";
import NavbarComp from "./components/Navbar";
import { Main } from "./components/Main"; 
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/cart/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarComp />
        <Main />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
