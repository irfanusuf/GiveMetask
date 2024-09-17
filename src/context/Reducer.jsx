// reducer function

const Reducer = (state, action) => {
  switch (action.type) {

    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "DATA_REQUEST":
      return { ...state, loading: true, error: null };

    case "DATA_FAILURE":
      return { ...state, error: action.payload, loading: false };

    case "USER_DATA":
      return { ...state, userData: action.payload, loading: false };

    case "ALL_USERS_DATA":
      return { ...state, users: action.payload, loading: false };

    case "ALL_POSTS_DATA":
      return { ...state, posts: action.payload, loading: false };

    case "POST_DATA":
      return { ...state, post: action.payload, loading: false };

    case "POST_DATA_RELOAD":
      return { ...state, postDataRelaod: action.payload, loading: false };
    default:
      return state;
  }
};

export default Reducer;
