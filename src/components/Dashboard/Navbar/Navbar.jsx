import styles from './Navbar.module.css';

export default function Navbar({ handleToggle }) {
    return (
        <>
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
        </>
    )
}