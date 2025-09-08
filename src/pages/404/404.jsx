import styles from './404.module.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/Footer/Footer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export default function NotFound() {
    useDocumentTitle ("Login");

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection
                title="404"
                titleVariant="404"
                subtitle="Oops! The page you’re looking for doesn’t exist."
                buttonText={<><i className="fas fa-home"></i> Back to Home</>}
                buttonLink="/"
                titleSize="display-1"
                className={ styles['cta-btn'] }
            />

            {/* Footer */}
            <Footer className={ styles['social-icons'] }/>
        </>
    );
}