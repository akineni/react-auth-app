import { useDarkMode } from '@context/DarkModeProvider';
import styles from './Categories.module.css';

export default function Categories({ categories }) {
	const { darkMode } = useDarkMode();

	return (
		<section
			className={`py-5 ${darkMode ? "bg-dark text-white-50" : "bg-light text-dark"}`}
		>
			<div className="container">
				<h2 className="mb-4 text-center">Shop by Category</h2>

				<div className="row row-cols-1 row-cols-md-3 g-4">
					{categories.map((category, index) => (
						<div className="col" key={index}>
							<div className={`card ${styles['category-card']}`}>
								<img
									src={category.image}
									className="card-img-top"
									alt={category.name}
								/>
								<div className="card-body text-center">
									<h5 className={styles['card-title']}>{category.name}</h5>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>

	);
}