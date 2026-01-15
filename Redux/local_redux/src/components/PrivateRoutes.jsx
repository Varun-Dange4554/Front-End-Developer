import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ childern }) => {
    const { isAuth } = useSelector((state)=>state.auths);
    if(!isAuth){
        return <Navigate to="/login" />;
    }
  return childern
}

