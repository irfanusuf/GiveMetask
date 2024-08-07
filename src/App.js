import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";

const App = () => {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main">
        <Routes>
          <Route path="*" element={"No page Found ! | 404"} />
          <Route path="/" element={<Home  />} />
          <Route path="/blogs" element={<Blogs />} />

        </Routes>
        </div>
        <Footer />
      </BrowserRouter> 
    </>
  );
};

export default App;
