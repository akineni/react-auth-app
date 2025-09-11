import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@schemas/login.schema';
import { toast } from 'react-toastify';
import Footer from '@components/Footer/Footer';
import { signInWithEmail, signInWithOAuth } from '@services/authService';
import { APP_NAME } from '@config/appConfig';
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import { useState } from 'react';

export default function Login() {
	useDocumentTitle("Login");

	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: zodResolver(loginSchema),
		mode: "onChange", // validates while typing
	});

	const navigate = useNavigate();

	const onSubmit = async (formData) => {
		try {
			const { user, session } = await signInWithEmail(formData);

			toast.success("Login successful!");
			navigate("/dashboard");
		} catch (err) {
			console.error("Error during login:", err);
			toast.error(err.message || "Failed to log in. Please try again.");
		}
	};

	return (
		<>
			<section className={styles['login-section']} autoComplete="off">
				<div className="container">
					<h1 className="mb-4">Welcome Back to {APP_NAME}</h1>
					<div className={styles['login-form-container']}>

						{/* Mock Google Sign-In Button */}
						<button className={styles['btn-google']} onClick={signInWithOAuth}>
							<i className="fa-brands fa-google me-2"></i> Sign in with Google
						</button>

						{/* Separator */}
						<div className={styles.separator}>or</div>

						<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
							<div className="mb-3">
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Enter your email"
									{...register("email")}
								/>
								{errors.email && (
									<p className="text-danger small">{errors.email.message}</p>
								)}
							</div>

							<div className="mb-3">
								<div className='position-relative'>
									<input
										type={showPassword ? "text" : "password"}
										className="form-control"
										id="password"
										placeholder="Enter your password"
										{...register("password")}
									/>
									<i
										className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} position-absolute top-50 end-0 translate-middle-y me-3`}
										style={{ color: "#343a40", cursor: "pointer" }}
										onClick={() => setShowPassword(!showPassword)}
									></i>
								</div>
								{errors.password && (
									<p className="text-danger small">{errors.password.message}</p>
								)}
							</div>

							<button type="submit" disabled={!isValid || isSubmitting}>
								{isSubmitting && (
									<span
										className="spinner-border spinner-border-sm"
										role="status"
										aria-hidden="true"
									></span>
								)}
								{isSubmitting ? " Logging in..." : "Login"}
							</button>
						</form>

						<div className={styles['login-footer']}>
							<p>
								Don't have an account? <Link to="/signup">Sign up here</Link>
							</p>
							<p>
								<Link to="/forgot-password">Forgot your password?</Link>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <Footer /> */}
			<Footer className={styles['social-icons']} />
		</>
	);
}