import { Link, useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '@schemas/forgot-password.schema';
import { resetPassword } from '@services/authService';
import { toast } from 'react-toastify';
import { useDocumentTitle } from '@hooks/useDocumentTitle';

export default function ForgotPassword() {
    useDocumentTitle ("Forgot Password");
    
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onChange", // validates while typing
    });

    const navigate = useNavigate();

    const onSubmit = async ({ email }) => {
        try {
            await resetPassword(email);
            toast.success("Password reset email sent! Check your inbox.");

            navigate("/login");
        } catch (err) {
            console.error("Error sending reset email:", err);
            toast.error(err.message || "Failed to send reset email. Please try again.");
        }
    };

    return (
        <section className={ styles['password-reset-section'] }>
            <div className="container">
                <h1>Forgot Your Password?</h1>
                <p>Enter your email address to reset your password.</p>
                <div className={ styles['password-reset-form-container'] }>
                    <form onSubmit={ handleSubmit(onSubmit) } noValidate autoComplete='off'>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" { ...register("email") } />
                            {errors.email && <p className="text-danger small">{errors.email.message}</p>}
                        </div>
                        <button type="submit" disabled={!isValid || isSubmitting}>
                            {isSubmitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                            {isSubmitting ? "" : "Send Reset Link"}
                        </button>
                    </form>

                    <div className={`${styles['password-reset-footer']} mt-4`}>
                        <p><Link to="/login">Back to Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}