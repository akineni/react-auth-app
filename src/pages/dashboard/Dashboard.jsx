import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/authService";
import { APP_NAME } from "../../config/appConfig";
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import styles from './Dashboard.module.css';
import { useEffect, useState } from "react";

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
            {/* Sidebar */}
            <div className={`
                ${styles.sidebar}
                ${isMobileSidebarOpen ? "show" : ""} 
                ${isSidebarCollapsed ? "collapsed" : ""}
            `} id="sidebar">
                <div className={styles['sidebar-header']}>
                    <h3 className="mb-0">{APP_NAME}</h3>
                    <button
                        className={styles['sidebar-close']}
                        id="sidebarClose"
                        onClick={() => setIsMobileSidebarOpen(false)}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <a href="#" className="active"><i className="fas fa-tachometer-alt me-2"></i> Dashboard</a>
                <a href="#"><i className="fas fa-box me-2"></i> Products</a>
                <a href="#"><i className="fas fa-shopping-cart me-2"></i> Orders</a>
                <a href="#"><i className="fas fa-users me-2"></i> Customers</a>
                <a href="#"><i className="fas fa-cog me-2"></i> Settings</a>
                <a href="" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                    <i className="fas fa-sign-out-alt me-2"></i> Logout
                </a>
            </div>

            {/* Mobile overlay */}
            <div
                className={styles['sidebar-overlay']}
                id="sidebarOverlay"
                onClick={() => setIsMobileSidebarOpen(false)}
            ></div>

            {/* Main Content */}
            <div className={`${styles['main-content']} ${isSidebarCollapsed ? "expanded" : ""}`} id="main-content">

                {/* Top Navbar */}
                <div className={styles['top-navbar']}>
                    <button
                        className={styles['toggle-btn']}
                        id="toggleBtn"
                        onClick={handleToggle}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <h4 className="mb-0">Dashboard</h4>
                    <div>
                        <i className="fas fa-bell me-3"></i>
                        <img src="https://i.pravatar.cc/40" className="rounded-circle" alt="User" />
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="row mt-4 g-4">
                    <div className="col-md-3">
                        <div className={`${styles['stat-card']} ${styles['bg-gradient-orange']} text-white`}>
                            <i className="fas fa-shopping-cart"></i>
                            <h4 className="mt-3">1,245</h4>
                            <p>Orders</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={`${styles['stat-card']} ${styles['bg-gradient-blue']} text-white`}>
                            <i className="fas fa-users"></i>
                            <h4 className="mt-3">3,560</h4>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={`${styles['stat-card']} ${styles['bg-gradient-green']} text-white`}>
                            <i className="fas fa-box"></i>
                            <h4 className="mt-3">120</h4>
                            <p>Products</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={`${styles['stat-card']} ${styles['bg-gradient-purple']} text-white`}>
                            <i className="fas fa-dollar-sign"></i>
                            <h4 className="mt-3">$25,430</h4>
                            <p>Revenue</p>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="row mt-4 g-4">
                    <div className="col-md-6">
                        <div className={styles['chart-container']}>
                            <h5>Sales Overview</h5>
                            <canvas id="salesChart"></canvas>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles['chart-container']}>
                            <h5>Traffic Sources</h5>
                            <canvas id="trafficChart"></canvas>
                        </div>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className={`${styles['recent-orders']} mt-4`}>
                    <h5>Recent Orders</h5>
                    <div className="table-responsive">
                        <table className="table align-middle mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1001</td>
                                    <td>Sarah P.</td>
                                    <td>Smartphone</td>
                                    <td><span className="badge bg-success">Completed</span></td>
                                    <td>$599</td>
                                </tr>
                                <tr>
                                    <td>1002</td>
                                    <td>John D.</td>
                                    <td>Sneakers</td>
                                    <td><span className="badge bg-warning">Pending</span></td>
                                    <td>$120</td>
                                </tr>
                                <tr>
                                    <td>1003</td>
                                    <td>Emma R.</td>
                                    <td>Coffee Maker</td>
                                    <td><span className="badge bg-danger">Cancelled</span></td>
                                    <td>$89</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}