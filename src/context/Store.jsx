import { createContext, useContext, useReducer } from "react";
import initialState from "./IntialState";
import Reducer from "./Reducer";


const AppContext = createContext();


export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const MyAppContext = () => useContext(AppContext);
