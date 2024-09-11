

//action types
const SET_USER = 'SET_USER';
const TOGGLE_THEME = 'TOGGLE_THEME';
const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

//reducer
const Reducer = (state, action) => {
    switch (action.type) {
      case SET_USER:
        return { ...state, user: action.payload };
      case TOGGLE_THEME:
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case FETCH_USER_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_USER_DATA_SUCCESS:
        return { ...state, userData: action.payload, loading: false };
      case FETCH_USER_DATA_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
};



export default Reducer

