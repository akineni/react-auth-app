import { APP_NAME } from '@config/appConfig';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import { useDarkMode } from '@context/DarkModeProvider';

export default function Navbar() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <nav className={`navbar navbar-expand-lg sticky-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container d-flex align-items-center">
                {/* Brand */}
                <Link className="navbar-brand" to="/">
                    {APP_NAME}
                </Link>

                {/* Mobile: Dark Mode Toggle + Hamburger */}
                <div className="d-flex align-items-center d-lg-none ms-auto">
                    {/* Dark Mode Toggle */}
                    <button
                        className="btn btn-link me-1"
                        onClick={() => setDarkMode(!darkMode)}
                        title="Toggle Dark Mode"
                        style={{ color: darkMode ? "#fff" : "#000", fontSize: "1.3rem" }}
                    >
                        <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
                    </button>

                    {/* Hamburger */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Desktop & Mobile Collapse */}
                <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarNav">
                    {/* Search Form */}
                    <form className={`${styles['search-form']} d-flex mx-auto`}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-secondary" type="submit">
                            Search
                        </button>
                    </form>

                    {/* Nav Links */}
                    <ul className="navbar-nav ms-auto align-items-center">
                        {/* Cart */}
                        <li className="nav-item" title="Cart">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                            </a>
                        </li>

                        {/* <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Categories</a></li> */}
                        {/* <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li> */}

                        {/* Auth Links */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link type="button" className="btn bg-orange text-white" to="/signup">Sign Up</Link>
                        </li>

                        {/* Desktop Dark Mode Toggle */}
                        <li className="nav-item d-none d-lg-block">
                            <button
                                className="btn btn-link"
                                onClick={() => setDarkMode(!darkMode)}
                                title="Toggle Dark Mode"
                                style={{ color: darkMode ? "#fff" : "#000", fontSize: "1.3rem" }}
                            >
                                <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
