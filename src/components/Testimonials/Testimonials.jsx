import { useDarkMode } from '@context/DarkModeProvider';
import styles from './Testimonials.module.css';

export default function Testimonials({ testimonials }) {
	const { darkMode } = useDarkMode();

	return (
		<section className={`py-5 section-neutral ${darkMode ? "text-white-50" : ""}`}>
			<div className="container">
				<h2 className="mb-4 text-center">What Our Customers Say</h2>

				<div className="row">
					{testimonials.map((testimonial, index) => (
						<div className="col-md-4 mb-4 mb-md-0" key={index}>
							<div
								className={`${styles['testimonial-card']} text-center ${darkMode ? "bg-dark text-light" : "bg-white text-dark"
									}`}
							>
								<img src="https://placehold.co/80x80" alt={testimonial.author} class="rounded-circle mb-3 mx-auto d-block"></img>
								<p>{testimonial.message}</p>
								<p className="fw-bold mb-0">- {testimonial.author}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>

	);
}