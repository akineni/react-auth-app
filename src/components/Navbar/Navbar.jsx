import { APP_NAME } from '../../config/appConfig';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">{APP_NAME}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <form className="d-flex mx-auto w-50">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" title="Cart"><a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping fa-xl"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
                        {/* <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li> */}
                        
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className={`nav-link btn bg-orange text-white`} to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}