import { Navigate, useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();
   if (loading) {
      return <SyncLoader color="#36d7b7" />;
   }
   if (user) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;


};

export default PrivateRoute;