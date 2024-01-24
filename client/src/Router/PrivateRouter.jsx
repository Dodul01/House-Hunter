import { useContext } from "react"
import { AppContext } from "../Context/appContext"
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user } = useContext(AppContext);

    if (user.role) {
        return children;
    }

    return <Navigate to={'/signIn'} />
}

export default PrivateRouter;