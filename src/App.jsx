import { BrowserRouter, Route, Routes } from "react-router-dom";

// local imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import NoPage from "./components/NoPage";
import Blogs from "./components/Blogs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SecureIndex from "./components/SecureIndex";
import { useEffect, useState } from "react";

const App = () => {

 // u can do authorization as this or u can just create custom hook by using HOC
 // function

  const [auth, setAuth] = useState(false);
  const isAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else if (token === null) {
      setAuth(false);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* unspecified path */}
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={ <Services/> } />

          <Route path="/blogs" element={ <Blogs /> } />

  
      {/* conditional rendering using ternary operator */}

           <Route
            path="/secureIndex"
            element={auth ? <SecureIndex /> : <Login/>}
          />
        </Routes> 

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
