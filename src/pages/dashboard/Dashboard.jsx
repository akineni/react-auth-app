import { useNavigate } from "react-router-dom";
import { signOut } from "@services/authService";
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import styles from './Dashboard.module.css';
import { useEffect, useState } from "react";
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

    useEffect(() => {
        // Load Chart.js dynamically
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.async = true;
        script.onload = () => {
            // Init Sales Chart
            if (document.getElementById("salesChart")) {
                new window.Chart(document.getElementById("salesChart"), {
                    type: "line",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            {
                                label: "Sales ($)",
                                data: [1200, 1900, 3000, 2500, 3200, 4100],
                                borderColor: "#ff5e62",
                                backgroundColor: "rgba(255, 94, 98, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                        ],
                    },
                });
            }

            // Init Traffic Chart
            if (document.getElementById("trafficChart")) {
                new window.Chart(document.getElementById("trafficChart"), {
                    type: "doughnut",
                    data: {
                        labels: ["Direct", "Referral", "Social"],
                        datasets: [
                            {
                                data: [55, 25, 20],
                                backgroundColor: ["#36d1dc", "#ff9966", "#7f00ff"],
                            },
                        ],
                    },
                });
            }
        };

        document.body.appendChild(script);

        // Cleanup (remove script + listeners)
        return () => {
            document.body.removeChild(script);
        };
    }, []);

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