import React from "react";
import Home from "./Screen/Home";
import Course from "./Screen/Course";
import Cart from "./Screen/Cart";
import Wishlist from "./Screen/Wishlist";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/course/:id" element={<Course></Course>} />
        <Route path="/Cart" element={<Cart></Cart>} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
