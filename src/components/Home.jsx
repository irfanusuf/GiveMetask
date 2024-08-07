import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

function Home() {
  const [content, setContent] = useState("");


  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };



  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/blogs", {
        content: content,
      })
      .then((response) => {
        console.log("Blog saved:", response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the blog!", error);
      });
  };

  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  }

  

  class MyUploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }

    async upload() {
      try {
        const file = await this.loader.file;
        const formData = new FormData();
        formData.append("upload", file);

        const response = await axios.post(
          "http://localhost:5000/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return { default: response.data.url };
      } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
      }
    }

    abort() {
      // Handle aborting the upload process if necessary
    }
  }

  return (
   
      <div className="home">
        <h2>Write a Blog</h2>
      
        <CKEditor
          editor={ClassicEditor}
          config={{
            extraPlugins: [MyCustomUploadAdapterPlugin],
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "imageUpload",
            ],
         
          }}
          data="<p>Write your blog content here...</p>"
          onChange={handleEditorChange}
        />
        <button
          onClick={handleSubmit}
          style={{ marginTop: "10px", padding: "10px 20px" }}
        >
          Save Blog
        </button>
      </div>

  );
}

export default Home;
