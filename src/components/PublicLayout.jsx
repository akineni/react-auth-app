import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@context/AuthProvider";

export default function PublicLayout() {
    const { session, user, isRecovery } = useAuth();

    if (user && !isRecovery) {
        return <Navigate to="/dashboard" replace />;
    }

    // If the user is in recovery mode, allow access to the reset password page
    return <Outlet />; // Renders nested public routes
}
