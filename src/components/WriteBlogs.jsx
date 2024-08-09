import React, { useState } from "react";
import "../styles/WriteBlogs.scss";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";

const WriteBlogs = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

//   const formData = { title, image, description };

const formData = new FormData()

formData.append("title" , title)
formData.append("image" , image)
formData.append("content" , content)

const handleEditorChange = (event , editor) => {
  console.log(event)
  const data = editor.getData();
  setContent(data);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const baseUrl = "http://localhost:4000";
      const token = localStorage.getItem("token");
      const url = `${baseUrl}/post/createPost/${token}`;
      const res = await axios.post(url, formData);
      toast.success("hogaya")
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  
  function customPlugin(editor) {
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

      <div className="create-blog">
        <form>
          <h1>WriteBlogs </h1>
          <input
            placeholder="Enter Your title "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type="file"
            placeholder="Choose Your image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
      
        </form>

        <CKEditor
          editor={ClassicEditor}
          config={{
            extraPlugins: [customPlugin],
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
        <button onClick={handleSubmit}>Post</button>
      </div>


  
  );
};

export default WriteBlogs;






/* <textarea
placeholder="Enter Your Description "
value={description}
onChange={(e) => {
  setDescription(e.target.value);
}}
>
{" "}
</textarea> */