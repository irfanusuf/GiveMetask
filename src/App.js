import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";

const App = () => {



  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/blogs" element={<Blogs />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
