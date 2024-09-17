import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  AccessibilityHelp,
  Alignment,
  AutoLink,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  BlockToolbar,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  FullPage,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  Indent,
  IndentBlock,
  Italic,
  Image,
  ImageToolbar,
  ImageUpload,
  ImageStyle,
  ImageResize,
  Link,
  Paragraph,
  RemoveFormat,
  SelectAll,
  ShowBlocks,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  Title,
  Underline,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

import "./EditBlog.scss";
import api from "../utils/AxiosInstance";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "../../context/Store";
import { getPost } from "../../context/ReducerFunctions";
import { useParams } from "react-router-dom";

export default function EditBlog() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);

  const {postId} = useParams()

  const {state , dispatch} = useDispatch()   // this is a custome hook and i prefer this name 


  

  const [isLayoutReady, setIsLayoutReady] = useState(false);


  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [dbImage , setDbIMage] =useState("") 
  const [loading, setLoading] = useState(false);

  const formData = new FormData();

  formData.append("title", title);
  formData.append("image", image);
  formData.append("content", content);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
    
      const res = await api.put(`/post/edit/${postId}`, formData);
      dispatch({ type: "POST_DATA_RELOAD", payload: res.data.message});
      toast.success(res.data.message);
    
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


useEffect(()=>{
    getPost(dispatch, postId)

},[dispatch ,postId])



useEffect(() => {
   
    if (state.post) {
      setTitle(state.post.title || "");
      setContent(state.post.content);
      setDbIMage(state.post.imageUrl || "")
     
    }
  }, [state.post ,isLayoutReady]); 


  useEffect(() => {
    document.title = "ALGO ACADEMY | Edit blog";
    setIsLayoutReady(true);

    // return () => setIsLayoutReady(false);
  }, []);


  function customPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadFunction(loader);
    };
  }

  function uploadFunction(loader) {
    const upload = async () => {
      try {
        const image = await loader.file;

        const formData = new FormData();

        formData.append("image", image);

        const response = await api.post(`/post/upload/image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        return { default: response.data.url };
      } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
      }
    };

    const abort = () => {
      // Handle aborting the upload process if necessary
    };

    return {
      upload,
      abort,
    };
  }

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "sourceEditing",
        "showBlocks",
        "selectAll",
        "textPartLanguage",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "removeFormat",
        "|",
        "specialCharacters",
        "horizontalLine",
        "link",
        "insertTable",
        "imageUpload",
        "highlight",
        "blockQuote",
        "codeBlock",
        "htmlEmbed",
        "|",
        "alignment",
        "|",
        "outdent",
        "indent",
        "|",
        "accessibilityHelp",
      ],
      shouldNotGroupWhenFull: true,
    },
    plugins: [
      AccessibilityHelp,
      Alignment,
      AutoLink,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      BlockToolbar,
      Bold,
      Code,
      CodeBlock,
      Essentials,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      FullPage,
      GeneralHtmlSupport,
      Heading,
      Highlight,
      HorizontalLine,
      HtmlComment,
      HtmlEmbed,
      Indent,
      IndentBlock,
      Image,
      ImageToolbar,
      ImageUpload,
      ImageStyle,
      ImageResize,
      Italic,
      Link,
      Paragraph,
      RemoveFormat,
      SelectAll,
      ShowBlocks,
      SourceEditing,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextPartLanguage,
      Title,
      Underline,
      Undo,
      customPlugin,
    ],
    balloonToolbar: ["bold", "italic", "|", "link"],
    blockToolbar: [
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "|",
      "link",
      "insertTable",
      "|",
      "outdent",
      "indent",
    ],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
      ],
    },
    initialData: content,

    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    menuBar: {
      isVisible: true,
    },

    placeholder: "Type or paste your content here!",

    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
    image: {
      toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
    },
  };

  return (
    <>
      <ToastContainer />

      <div className="create-blog">


    

      <img src={dbImage} alt="db-image" style={{width : "200px"}}/>


        <form>

          <h1>Edit Blog </h1>


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

        <div>
          <div>
           {isLayoutReady &&
              <CKEditor
                editor={ClassicEditor}
                config={editorConfig}
                onChange={handleEditorChange}
              />}
            
          </div>
        </div>
    
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "upload..." : "upload"}
        </button>
      </div>
    </>
  );
}
