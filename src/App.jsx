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

const App = () => {
  
// data 

const myName = "interface learning School "


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* unspecified path */}
          <Route path="*" element= {<NoPage/>} />    
          <Route path="/" element= {<Home x={myName} />} />
          <Route path="/contact" element= {<Contact  y = {myName}/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/services" element= {<Services/>} />
          <Route path="/blogs" element= {<Blogs/>} />
          <Route path="/signup" element= {<SignUp/>} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
