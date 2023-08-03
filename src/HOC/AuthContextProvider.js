import {createContext, useState} from "react";

const Context = createContext(null);

const initial = {isLogin: null}

const AuthContextProvider = ({children}) => {
    const [authContext, setAuthContext] = useState(initial)

    const handleLogOut = () => {
        setAuthContext(initial)
    }

    return (
        <Context.Provider value={{authContext, setAuthContext, handleLogOut}}>
            {children}
        </Context.Provider>
    );
};

export {
    AuthContextProvider,
    Context
};
