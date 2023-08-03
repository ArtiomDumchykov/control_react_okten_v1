import {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";

import {Context} from "./AuthContextProvider";

const AuthRequired = ({children}) => {
    const {authContext: {isLogin}} = useContext(Context)
    const {pathname} = useLocation();

    if (!isLogin){
        return <Navigate to={'/login'} state={pathname}/>
    }
    return children
};

export  {AuthRequired};
