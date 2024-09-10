// import React, { useState } from "react";
// import "./WriteBlogs.scss";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// // import {ClassicEditor} from "ckeditor5";
// import { toast, ToastContainer } from "react-toastify";
// import api from "../utils/AxiosInstance";

// const WriteBlogs = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState(null);
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(false);

//   // const formData = { title, image, description };

//   // above  formData will not work becoz we are sending .jpg/.png in formData

//   const formData = new FormData();

//   formData.append("title", title);
//   formData.append("image", image);
//   formData.append("content", content);

//   const handleEditorChange = (event, editor) => {
//     const data = editor.getData();
//     setContent(data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       if (title === "") {
//         return toast.error("Title Required!");
//       }
//       const res = await api.post(`/post/createPost`, formData);
//       toast.success(res.data.message);
//       console.log(res);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   function customPlugin(editor) {
//     editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
//       return uploadFunction(loader);
//     };
//   }

//   function uploadFunction(loader) {
//     const upload = async () => {
//       try {
//         const image = await loader.file;

//         const formData = new FormData();

//         formData.append("image", image);

//         const response = await api.post(`/post/upload/image`, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         return { default: response.data.url };
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         throw error;
//       }
//     };

//     const abort = () => {
//       // Handle aborting the upload process if necessary
//     };

//     return {
//       upload,
//       abort,
//     };
//   }

//   return (
//     <>
//       <ToastContainer />

//       <div className="create-blog">
//         <form>
//           <h1>WriteBlogs </h1>
//           <input
//             placeholder="Enter Your title "
//             value={title}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//           />

//           <input
//             type="file"
//             placeholder="Choose Your image"
//             onChange={(e) => {
//               setImage(e.target.files[0]);
//             }}
//           />
//         </form>

//         <CKEditor
//           editor={ClassicEditor}
//           config={{
//             extraPlugins: [customPlugin],
            
        
//           }}
//           data="<p>Write your blog content here...</p>"
//           onChange={handleEditorChange}
//         />
//         <button onClick={handleSubmit} disabled={loading}>
//           {loading ? "upload..." : "upload"}
//         </button>
//       </div>
//     </>
//   );
// };

// export default WriteBlogs;
