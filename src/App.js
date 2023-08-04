import React from "react";
import NavbarComp from "./components/Navbar/Navbar";
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <NavbarComp/>
      <Main/>
      <ItemListContainer greeting="Hola tutor, compramé una remera jaja"/>
      <Footer/>
    </>
  );
}

export default App;
