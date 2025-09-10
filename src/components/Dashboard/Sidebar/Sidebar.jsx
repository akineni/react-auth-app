import { APP_NAME } from "@config/appConfig";
import styles from './Sidebar.module.css';

export default function Sidebar({
    isSidebarCollapsed,
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    handleLogout
}) {
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
                <a href="#"><i className="fas fa-box me-2"></i> Menu 2</a>
                <a href="#"><i className="fas fa-shopping-cart me-2"></i> Menu 3</a>
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
        </>
    )
}