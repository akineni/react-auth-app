import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
	return (
		<section className={`${styles['subscribe-form']} bg-light`}>
			<div className="container">
				<h3 className="mb-4">Stay Updated with Our Latest Offers</h3>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8 col-lg-6 mx-auto">
							<form
								action="#"
								method="post"
								className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2"
							>
								<input
									className="form-control w-100"
									type="email"
									placeholder="Enter your email"
									required
								/>
								<button
									type="submit"
									className={`form-control ${styles['subscribe-btn']} w-100 w-md-auto`}
								>
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>



			</div>
		</section>
	);
}