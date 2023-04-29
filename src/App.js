import React, { useState } from "react";
import {
  fetchCatImage,
  fetchCatsImages
} from "./api";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import CatsGallery from "./components/CatsGallery";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cats-gallery' element={<CatsGallery />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
