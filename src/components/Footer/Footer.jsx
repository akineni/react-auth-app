import { APP_NAME } from '@config/appConfig';
import styles from './Footer.module.css';

export default function Footer({ className }) {
    return (
        <footer className={ styles.footer }>
            <div className="container">
                <p>&copy; 2024 {APP_NAME}. All rights reserved.</p>
                <p>Follow us on:</p>
                <div className={ className }>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
}