import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const titleVariants = {
    home: styles.heroTitleHome,
    "404": styles.heroTitle404,
};

export default function HeroSection({
    title,
    subtitle,
    buttonText,
    buttonLink,
    className,
    titleSize="display-3",
    buttonSize="",
    titleVariant = "home",
}) {
    return (
        <section className={styles['hero-section']}>
            <div className="container">
                <h1 className={`
                    ${styles.heroTitle}
                    ${titleSize}
                    ${titleVariants[titleVariant] || ''}
                `}>{title}</h1>
                <p className="lead">{subtitle}</p>
                <Link to={buttonLink} className={`btn ${className} ${buttonSize} mt-3`}>{buttonText}</Link>
            </div>
        </section>
    );
}