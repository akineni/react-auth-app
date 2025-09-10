import { APP_NAME } from '@config/appConfig';
import styles from './Footer.module.css';

export default function Footer({ className }) {
    return (
        <footer className={ styles.footer }>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
                <div className={ className }>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
}