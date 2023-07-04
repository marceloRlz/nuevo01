/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

import ItemListContainer from "./components/item/ItemListContainer";
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
         
          <Route path="*" element={<h2>sitio en Construccion</h2>} />
        </Routes> 
      </BrowserRouter>
    </>
  );
};

export default App;
