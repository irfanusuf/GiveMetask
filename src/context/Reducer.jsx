
// reducer function 

const Reducer = (state, action) => {

    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.payload};
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case "USER_DATA_REQUEST":
        return { ...state, loading: true, error: null };
      case "USER_DATA_SUCCESS":
        return { ...state, userData: action.payload, loading: false };
      case "USER_DATA_FAILURE":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
};



export default Reducer

