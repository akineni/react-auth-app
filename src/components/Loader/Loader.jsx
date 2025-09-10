import { useAuth } from '@context/AuthProvider';
import styles from './Loader.module.css';

export default function Loader() {

	const { loading } = useAuth();
	if (!loading) return null;

	return (
		<div className={styles['lds-spinner-wrap']}>
			<div className={styles['lds-spinner']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	);
}
