import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store1/store1";

export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/Login'} replace={true}></Navigate>
    }

    return children;
}


export const ProtectRoute = ({ children }) => {
    const username = useAuthStore.getState().auth.username;
    if(!username){
        return <Navigate to={'/Login'} replace={true}></Navigate>
    }
    return children;
}