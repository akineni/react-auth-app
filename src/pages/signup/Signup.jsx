import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@schemas/signup.schema';
import { toast } from 'react-toastify';
import { signUpNewUser, signInWithOAuth } from '@services/authService';
import { APP_NAME } from '@config/appConfig';
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import Footer from '@components/Footer/Footer';

export default function Signup() {
    useDocumentTitle ("Signup");
    
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        resolver: zodResolver(signupSchema),
        mode: "onChange", // validates while typing
    });

    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            // Call your auth service
            const { user, session } = await signUpNewUser(formData);

            // console.log("Sign up successful:", user);
            toast.success("Sign up successful! Please check your email to verify your account.");

            navigate("/login");

        } catch (err) {
            console.error("Error during registration:", err);
            toast.error(err.message || "Failed to sign up. Please try again.");
        }
    };

    return (
        <>
            {/* Signup Section */}
            <section className={styles['signup-section']}>
                <div className="container">
                    <h1 className="mb-4">Join {APP_NAME}</h1>
                    <div className={styles['signup-form-container']}>
                        {/* Mock Google Sign-Up Button */}
                        <button className={styles['btn-google']} onClick={signInWithOAuth}>
                            <i className="fa-brands fa-google me-2"></i> Sign up with Google
                        </button>

                        {/* Separator */}
                        <div className={styles.separator}>or</div>

                        {/* handleSubmit" will validate your inputs before invoking "onSubmit" */}
                        <form onSubmit={ handleSubmit(onSubmit) } noValidate autoComplete='off'>
                            <div className="mb-3">
                                {/* register your input into the hook by invoking the "register" function */}
                                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" { ...register("fullName") } />
                                {errors.fullName && <p className="text-danger small">{errors.fullName.message}</p>}
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" { ...register("email") } />
                                {errors.email && <p className="text-danger small">{errors.email.message}</p>}
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" { ...register("password") } />
                                {errors.password && <p className="text-danger small">{errors.password.message}</p>}
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" { ...register("confirmPassword") } />
                                {errors.confirmPassword && <p className="text-danger small">{errors.confirmPassword.message}</p>}
                            </div>
                            <button type="submit" disabled={!isValid || isSubmitting}>
                                {isSubmitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                {isSubmitting ? " Signing up..." : "Sign Up"}
                            </button>
                        </form>

                        <div className={ styles['signup-footer'] }>
                            <p>Already have an account? <Link to="/login">Login here</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer className={ styles['social-icons'] } />
        </>
    );
}