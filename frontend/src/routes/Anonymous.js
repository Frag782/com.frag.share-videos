import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider"

export const Anonymous = () => {
    const { user } = useAuth();

    return user ? <Navigate to="/" replace /> : <Outlet />;
}