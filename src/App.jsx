// from node modules
import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// local imports or  // static import
import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import NoPage from "./components/NoPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Loading from "./components/sharedComponents/Loading";
import Index from "./components/Index";
import PersonalBlogs from "./components/PersonalBlogs";
import WriteBlogs from "./components/WriteBlogs";

// lazy import or // dynamic import
const SecureIndex = React.lazy(() => delay(import("./components/SecureIndex")));
const Services = React.lazy(() => delay(import("./components/Services")));
const Blogs = React.lazy(() => delay(import("./components/Blogs")));

// delay is an async function which will delay importing of file by 1 seconds

async function delay(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise;
}

const App = () => {
  // u can do authorization as this or u can just create custom hook by using HOC
  // function

  // const [auth, setAuth] = useState(false);
  // const isAuth = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setAuth(true);
  //   } else if (token === null) {
  //     setAuth(false);
  //   }
  // };

  // useEffect(() => {
  //   isAuth();
  // }, []);

  const [change, setChange] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar change={change} />
        <div className="main">
          <Routes>
            {/* unspecified path */}
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/login"
              element={<Login setChange={setChange} change={change} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            <Route path="/user/blogs" element={<PersonalBlogs />} />

            <Route path="/user/post" element={<WriteBlogs />} />
            <Route
              path="/services"
              element={
                <Suspense fallback={<Loading />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/blogs"
              element={
                <Suspense fallback={<Loading />}>
                  <Blogs />
                </Suspense>
              }
            />
            <Route
              path="/secureIndex"
              element={
                <Suspense fallback={<Loading />}>
                  <SecureIndex />
                </Suspense>
              }
            />

            {/* conditional rendering using ternary operator */}
            {/* <Route path="/secureIndex" element={auth ? <SecureIndex/>:<Login/>}/> */}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
