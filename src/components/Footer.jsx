import React from "react";

const Footer = () => {
  return (
    <div>
      <p> COpyright 2024 Allrights REserved </p>
    </div>
  );
};

export default Footer;




// class MyUploadAdapter2 {
//   constructor(loader) {
//     this.loader = loader;
//   }

//   upload() {
//     return this.loader.file.then(
//       (file) =>
//         new Promise((resolve, reject) => {
//           const data = new FormData();
//           data.append("upload", file);

//           axios
//             .post("http://localhost:5000/api/upload", data, {
//               headers: {
//                 "Content-Type": "multipart/form-data",
//               },
//             })
//             .then((response) => {
//               resolve({
//                 default: response.data.url,
//               });
//             })
//             .catch((error) => {
//               reject(error);
//             });
//         })
//     );
//   }

//   abort() {
//     // Handle aborting the upload process
//   }
// }