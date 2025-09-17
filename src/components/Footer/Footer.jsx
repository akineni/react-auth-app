import { APP_NAME } from '@config/appConfig';
import styles from './Footer.module.css';

export default function Footer({ className }) {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<p>
					&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
				</p>

				<div className={className}>
					<a
						href="https://github.com/akineni/react-auth-app"
						title="View github repo"
						target="_blank"
					>
						<i className="fab fa-github"></i>
					</a>

					<a
						href="https://www.linkedin.com/in/eniola-akinlonu-b210b3164"
						title="View linkedin post"
						target="_blank"
					>
						<i className="fab fa-linkedin"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}