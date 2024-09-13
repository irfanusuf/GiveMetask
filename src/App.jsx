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
// import WriteBlogs from "./components/pages/WriteBlogs";
import SingleBlog from "./components/pages/SingleBlog";
import Carriers from "./components/pages/Carriers";
import Courses from "./components/pages/Courses";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import UserProfile from "./components/user/UserProfile";
import api from "./components/utils/AxiosInstance";
import CompanyPolicy from "./components/pages/CompanyPolicy";
import Ck from "./components/molecules/CkEditor";
// import LiveClass from "./components/user/LiveClass";
import LiveClass from "./components/admin/LiveClass"


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

export const Context = createContext();

const App = () => {

  const [change, setChange] = useState(false);
  const [user, setUser] = useState({
    email : "",
    id : "",
    message : ""
  });
  const [showMenu, setShowMenu] = useState(false);

  function menuOpenClose() {
    setShowMenu(!showMenu);
  }

  const getUserData = async () => {
    try {
      const res = await api.get(`/user/getUser`);
      setUser(res.data);
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
          user={user.email}
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
                <Context.Provider value={user.email}>
                  <Index />
                </Context.Provider>
              }
            />

            <Route path="/blogs" element={<PersonalBlogs />} />
            <Route path="/blogs/:_id" element={<SingleBlog userid ={user.id} />} />
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
            {/* <Route path="/user/liveClass" element={<LiveClass />} /> */}

            {/* admin routes */}
            
            <Route path="/admin/post" element={<Ck />} />
            <Route path="/admin/class/:roomId" element={<LiveClass/>} />

            <Route
              path="/admin/dashboard"
              element={
                <Suspense fallback={<Loading />}>
                  <SecureIndex user={user.email} />
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




  // "@ckeditor/ckeditor5-build-classic": "^43.0.0",
    // "@ckeditor/ckeditor5-react": "^9.0.0",