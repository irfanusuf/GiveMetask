import { BrowserRouter, Route, Routes } from "react-router-dom";

// local imports 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import NoPage from "./components/NoPage";

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
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
