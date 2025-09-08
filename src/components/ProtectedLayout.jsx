import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function ProtectedLayout() {
    const { session } = useAuth();

    if (!session) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {/* Optional: add header/navbar/footer here */}
            <Outlet /> {/* Renders the nested protected routes */}
        </>
    );
}
