import { useNavigate } from "react-router-dom";
import { signOut } from "@services/authService";
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import styles from './Dashboard.module.css';
import { useState } from "react";
import Sidebar from "@components/Dashboard/Sidebar/Sidebar";
import Navbar from "@components/Dashboard/Navbar/Navbar";
import StatisticsOverview from "@components/Dashboard/StatisticsOverview/StatisticsOverview";
import Charts from "@components/Dashboard/Charts/Charts";
import RecentOrders from "@components/Dashboard/RecentOrders/RecentOrders";

export default function Dashboard() {
    useDocumentTitle("Dashboard");

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const handleToggle = () => {
        if (window.innerWidth <= 768) {
            setIsMobileSidebarOpen(!isMobileSidebarOpen);
        } else {
            setIsSidebarCollapsed(!isSidebarCollapsed);
        }
    };

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut();
            navigate("/login");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <>
            <Sidebar
                isSidebarCollapsed={isSidebarCollapsed}
                isMobileSidebarOpen={isMobileSidebarOpen}
                setIsMobileSidebarOpen={setIsMobileSidebarOpen}
                handleLogout={handleLogout}
            />

            {/* Main Content */}
            <div className={`${styles['main-content']} ${isSidebarCollapsed ? "expanded" : ""}`} id="main-content">

                <Navbar handleToggle={handleToggle} />

                <StatisticsOverview />

                <Charts />

                <RecentOrders />
            </div>
        </>
    )
}