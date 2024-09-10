// from node modules
import React, { Suspense, useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// local imports or  // static import
import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";

import NoPage from "./components/sharedComponents/NoPage";
import Loading from "./components/sharedComponents/Loading";

import Index from "./components/pages/Index";
import PersonalBlogs from "./components/pages/PersonalBlogs";
import WriteBlogs from "./components/pages/WriteBlogs";
import SingleBlog from "./components/pages/SingleBlog";
import Carriers from "./components/pages/Carriers";
import Courses from "./components/pages/Courses";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";

import UserProfile from "./components/user/UserProfile";
import api from "./components/utils/AxiosInstance";
import CompanyPolicy from "./components/pages/CompanyPolicy";

// lazy import or // dynamic import
const SecureIndex = React.lazy(() =>
  delay(import("./components/admin/SecureIndex"))
);

// delay is an async function which will delay importing of file by 1 seconds
async function delay(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise;
}

const App = () => {
  const Context = createContext();
  const [change, setChange] = useState(false);
  const [user, setUser] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  function menuOpenClose() {
    setShowMenu(!showMenu);
  }

  const getUserData = async () => {
    try {
      const res = await api.get(`/user/getUser`);
      setUser(res.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [change]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          user={user}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          menuOpenClose={menuOpenClose}
        />

        <div className="main" onClick={()=>{setShowMenu(false)}}>
          <Routes>
            {/* unspecified path */}

            <Route path="*" element={<NoPage />} />

            <Route
              path="/"
              element={
                <Context.Provider value={user}>
                  <Index />
                </Context.Provider>
              }
            />

            <Route path="/blogs" element={<PersonalBlogs />} />
            <Route path="/blogs/:_id" element={<SingleBlog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/carrier" element={<Carriers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/company-policy" element={<CompanyPolicy />} />
          

            <Route
              path="/login"
              element={<Login setChange={setChange} change={change} />}
            />
            <Route path="/user/profile" element={<UserProfile />} />

            {/* admin routes */}

            <Route path="/admin/post" element={<WriteBlogs />} />

            <Route
              path="/admin/dashboard"
              element={
                <Suspense fallback={<Loading />}>
                  <SecureIndex user={user} />
                </Suspense>
              }
            />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
