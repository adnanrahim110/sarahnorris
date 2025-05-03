import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import ContactPrayers from "./pages/ContactPrayers";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-and-prayers" element={<ContactPrayers />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
