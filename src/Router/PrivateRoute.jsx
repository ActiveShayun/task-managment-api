import { useContext } from "react";
import { UseAuth } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UseAuth)
    console.log('PrivateRoute', user);
    const location = useLocation()
    if (loading) {
        return '...Loading'
    }

    if (user?.email) {
        return children
    }

    return <Navigate to={'/login/'} state={location?.pathname}></Navigate>


};

export default PrivateRoute;