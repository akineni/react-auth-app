import { APP_NAME } from '@config/appConfig';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import { useDarkMode } from '@context/DarkModeProvider';

export default function Navbar() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <nav className={`navbar navbar-expand-lg sticky-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container">
                {/* Brand */}
                <Link className="navbar-brand" to="/">
                    {APP_NAME}
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse mt-4 mt-md-0" id="navbarNav">
                    
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

                    {/* Right Side Nav */}
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
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link type="button" className="btn bg-orange text-white" to="/signup">
                                Sign Up
                            </Link>
                        </li>

                        {/* Dark Mode Toggle */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="darkModeToggle"
                                title="Toggle Dark Mode"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <i
                                    className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}
                                    style={{ cursor: "pointer", fontSize: "larger" }}
                                ></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
