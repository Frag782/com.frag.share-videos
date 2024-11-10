import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export const Protected = () => {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to='/connexion' replace />
}