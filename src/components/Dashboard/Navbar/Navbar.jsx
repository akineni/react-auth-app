import { useAuth } from '@context/AuthProvider';
import styles from './Navbar.module.css';
import { useDarkMode } from '@context/DarkModeProvider';

export default function Navbar({ handleToggle }) {
    const { session } = useAuth();
    const { darkMode } = useDarkMode();
    const avatarUrl = session?.user?.user_metadata?.avatar_url;
    const fallbackAvatar = "https://www.gravatar.com/avatar/?d=mp"; // https://i.pravatar.cc/40
    const safeAvatarUrl = avatarUrl && avatarUrl.trim() !== "" ? avatarUrl : fallbackAvatar;

    return (
        <>
            {/* Top Navbar */}
            <div className={`${styles['top-navbar']} ${darkMode ? "bg-dark text-white" : ""}`}>
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
                    <img
                        src={safeAvatarUrl}
                        className="rounded-circle"
                        alt="User"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
        </>
    )
}