import { createContext, useContext, useReducer } from "react";
import initialState from "./IntialState";
import Reducer from "./Reducer";


const Context = createContext();


export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};


//custom hook 
export const useDispatch = () => useContext(Context);



