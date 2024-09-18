// from node modules
import React, { Suspense, useEffect, useState} from "react";
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
import CompanyPolicy from "./components/pages/CompanyPolicy";
import Ck from "./components/molecules/CkEditor";
import LiveClass from "./components/user/LiveClass";
import LiveClass2 from "./components/user/LiveClass2";
import { useDispatch } from "./context/Store";
import { getAllPosts, getUser } from "./context/ReducerFunctions";
import LiveVideo from "./components/admin/LiveVideo";
import EditBlog from "./components/pages/EditBlog";
import InteractPanel from "./components/user/InteractPanel";
// import LiveClass from "./components/admin/LiveClass"


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
  const {state , dispatch} = useDispatch()
  const [change, setChange] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function menuOpenClose() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
   getUser(dispatch)
 
  }, [change , dispatch ]);

  useEffect(() => {
    getAllPosts(dispatch)
   }, [dispatch ,state.postDataRelaod]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          user={state.userData.email}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          menuOpenClose={menuOpenClose}
        />

        <div className="main" onClick={()=>{setShowMenu(false)}}>
          <Routes>
            {/* unspecified path */}

            <Route path="*" element={<NoPage />} />

            <Route path="/" element={<Index />}/>
            <Route path="/blogs" element={<PersonalBlogs />} />
            <Route path="/blogs/:_id" element={<SingleBlog userid ={state.userData.id}/>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/carrier" element={<Carriers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/company-policy" element={<CompanyPolicy />} />
            <Route path="/interaction" element={<InteractPanel />} />

            <Route
              path="/login"
              element={<Login setChange={setChange} change={change} />}
            />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/class/:roomId" element={<LiveClass2 />} />

            {/* admin routes */}
            
            <Route path="/admin/post" element={<Ck />} />
            <Route path="/admin/editPost/:postId" element={<EditBlog/>} />

            <Route path="/admin/class/:roomId" element={<LiveVideo/>} />

            <Route
              path="/admin/dashboard"
              element={
                <Suspense fallback={<Loading />}>
                  <SecureIndex />
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
