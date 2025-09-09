import { Link, useNavigate } from 'react-router-dom';
// import { ReactComponent as GoogleIcon } from '../../assets/7123025_logo_google_g_icon.svg';
import styles from './Login.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/login.schema';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer/Footer';
import { signInWithEmail, signInWithOAuth } from '../../services/authService';
import { APP_NAME } from '../../config/appConfig';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export default function Login() {
    useDocumentTitle ("Login");

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

            // console.log("Login successful:", user);
            toast.success("Login successful!");

            navigate("/dashboard");

        } catch (err) {
            console.error("Error during login:", err);
            toast.error(err.message || "Failed to log in. Please try again.");
        }
    };

    return (
        <>
            <section className={ styles['login-section'] } autoComplete="off">
                <div className="container">
                    <h1 className="mb-4">Welcome Back to {APP_NAME}</h1>
                    <div className={ styles['login-form-container'] }>
                        {/* Mock Google Sign-In Button */}
                        <button className={ styles['btn-google'] } onClick={signInWithOAuth}>
                            <i className="fa-brands fa-google me-2"></i> Sign in with Google
                        </button>

                        {/* Separator */}
                        <div className={ styles.separator }>or</div>
                        
                        <form onSubmit={ handleSubmit(onSubmit) } noValidate autoComplete='off'>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" { ...register("email") } />
                                {errors.email && <p className="text-danger small">{errors.email.message}</p>}
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" { ...register("password") } />
                                {errors.password && <p className="text-danger small">{errors.password.message}</p>}
                            </div>
                            <button type="submit" disabled={!isValid || isSubmitting}>
                                {isSubmitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                {isSubmitting ? " Logging in..." : "Login"}
                            </button>
                        </form>

                        <div className={ styles['login-footer'] }>
                            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
                            <p><Link to="/forgot-password">Forgot your password?</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
            <footer className={ styles.footer }>
                <div className="container">
                    <p>&copy; 2024 {APP_NAME}. All rights reserved.</p>
                    <div className={ styles['social-icons']}>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
}