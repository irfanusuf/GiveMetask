// from node modules
import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// local imports or  // static import
import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";
import Contact from "./components/Contact";
import NoPage from "./components/sharedComponents/NoPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Loading from "./components/sharedComponents/Loading";
import Index from "./components/Index";
import PersonalBlogs from "./components/PersonalBlogs";
import WriteBlogs from "./components/WriteBlogs";
import SingleBlog from "./components/SingleBlog";
import Carriers from "./components/Carriers";
import Courses from "./components/Courses";

// lazy import or // dynamic import
const SecureIndex = React.lazy(() =>
  delay(import("./components/admin/SecureIndex"))
);
// const Services = React.lazy(() => delay(import("./components/Services")));
// const Blogs = React.lazy(() => delay(import("./components/Blogs")));

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
        <Navbar change={change} setChange={setChange} />
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
           
            <Route path="/blogs" element={<PersonalBlogs />} />
            <Route path="/blogs/:_id" element={<SingleBlog />} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/carrier" element={<Carriers />} />
            <Route path="/contact" element={<Contact />} />




            <Route path="/admin/post" element={<WriteBlogs />} />
          
            

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
