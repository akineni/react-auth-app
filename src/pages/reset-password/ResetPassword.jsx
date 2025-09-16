import { Link, useNavigate } from 'react-router-dom';
import styles from './ResetPassword.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { changePassword } from '@services/authService';
import { resetPasswordSchema } from '@schemas/reset-password.schema';
import { toast } from 'react-toastify';
import { useAuth } from '@context/AuthProvider';
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import { useState } from 'react';

export default function ResetPassword() {
	useDocumentTitle("Reset Password");

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const navigate = useNavigate();
	const { isRecovery } = useAuth();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: zodResolver(resetPasswordSchema),
		mode: "onChange", // validates while typing
	});

	const onSubmit = async ({ password }) => {
		try {
			reset(); // Clear form immediately after submission

			await changePassword(password);
			toast.success("Password changed successfully! You can now log in with your new password.");

			navigate("/login");
		} catch (err) {
			console.error("Error changing password ", err);
			toast.error(err.message || "Failed to change password. Please try again.");
		}
	};

	// If not in recovery mode, show a message to use the reset link
	if (!isRecovery) {
		return (
			<section className={styles['reset-password-section']}>
				<div className="container">
					<h1>Invalid Password Reset</h1>
					<p>Please use the link sent to your email to reset your password.</p>
					<div className={styles['reset-password-footer']}>
						<p><Link to="/login">Back to Login</Link></p>
					</div>
				</div>
			</section>
		);
	}

	// Otherwise, render the reset password form
	return (
		<section className={styles['reset-password-section']}>
			<div className="container">
				<h1>Reset Your Password</h1>
				<p>Please enter your new password below.</p>

				<div className={styles['reset-password-form-container']}>
					<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
						<div className="mb-3">
							<div className="position-relative">
								<input
									type={showPassword ? "text" : "password"}
									className="form-control"
									id="new-password"
									placeholder="New Password"
									autoComplete="new-password"
									{...register("password")}
								/>
								<i
									className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"
										} position-absolute top-50 end-0 translate-middle-y me-3`}
									style={{ color: "var(--color-secondary-dark)", cursor: "pointer" }}
									onClick={() => setShowPassword(!showPassword)}
								></i>
							</div>
							{errors.password && (
								<p className="text-danger small">{errors.password.message}</p>
							)}
						</div>

						<div className="mb-3">
							<div className="position-relative">
								<input
									type={showConfirmPassword ? "text" : "password"}
									className="form-control"
									id="confirm-password"
									placeholder="Confirm New Password"
									autoComplete="new-password"
									{...register("confirmPassword")}
								/>
								<i
									className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"
										} position-absolute top-50 end-0 translate-middle-y me-3`}
									style={{ color: "var(--color-secondary-dark)", cursor: "pointer" }}
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								></i>
							</div>
							{errors.confirmPassword && (
								<p className="text-danger small">
									{errors.confirmPassword.message}
								</p>
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
							{isSubmitting ? " Changing password..." : "Reset Password"}
						</button>
					</form>

					<div className={`${styles['reset-password-footer']} mt-4`}>
						<p>
							<Link to="/login">Back to Login</Link>
						</p>
					</div>
				</div>
			</div>
		</section>

	);
}