// initial state
const initialState = {
   
    theme: 'dark',
    loading : false,
    error : null,
    postDataLoad : false,
    userData : {
      message : "",
      email : "",
      id : ""    
    },
    users : [],
    posts : [],
    post : {
      title: "",
      imageUrl: "",
      content: "",
    },
    postDataRelaod : "",
};



export default initialState