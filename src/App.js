import React from "react";
import NavbarComp from "./components/Navbar";
import {Main} from "./components/Main" 
import Footer from "./components/Footer";

import {BrowserRouter} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>

      <NavbarComp/>
      <Main/>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
