import { Navigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";


export const PrivateRoute = ({children}) => {
    const {user} = useAuth();



    return user? children : <Navigate to ={'/login'} replace/>
}


export const PublicRoute = ({children}) => {
    const {user } = useAuth();

 

    return !user? children : <Navigate to={'/dashboard'} replace/>
}