import styles from './Home.module.css';
import { useState } from 'react';
import Navbar from '@components/Navbar/Navbar';
import HeroSection from '@components/HeroSection/HeroSection';
import FeaturedProducts from '@components/FeaturedProducts';
import Categories from '@components/Categories/Categories';
import Testimonials from '@components/Testimonials/Testimonials';
import SubscribeForm from '@components/SubscribeForm/SubscribeForm';
import Footer from '@components/Footer/Footer';
import { useDocumentTitle } from '@hooks/useDocumentTitle';

export default function Home() {
    useDocumentTitle ("Home");
    
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', image: 'https://placehold.co/800x400?text=Product+1' },
        { id: 2, name: 'Product 2', image: 'https://placehold.co/800x400?text=Product+2' },
        { id: 3, name: 'Product 3', image: 'https://placehold.co/800x400?text=Product+3' },
    ]);

    const [categories, setCategories] = useState([
        { id: 1, name: 'Electronics', image: 'https://placehold.co/300' },
        { id: 2, name: 'Fashion', image: 'https://placehold.co/300' },
        { id: 3, name: 'Home & Garden', image: 'https://placehold.co/300' },
    ])

    const [testimonials, setTestimonials] = useState([
        { id: 1, message: 'Amazing products! The customer service is top-notch and delivery was fast.', author: 'John Doe' },
        { id: 2, message: 'I love shopping here. High-quality items at affordable prices.', author: 'Jane Smith' },
        { id: 3, message: 'Great experience overall. I’ll definitely be coming back for more.', author: 'Alice Johnson' },
    ])

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection
                title="Discover Your Style"
                titleVariant="home"
                subtitle="Exclusive collections at unbeatable prices."
                buttonText="Shop Now"
                buttonLink="#"
                buttonSize="btn-lg"
                className={ styles['cta-btn'] }
            />

            {/* Featured Products Carousel */}
            <FeaturedProducts products={ products } />

            {/* Categories Section */}
            <Categories categories={ categories } />

            {/* Testimonials Section */}
            <Testimonials testimonials={ testimonials } />

            {/* Subscribe Section */}
            <SubscribeForm />

            {/* Footer */}
            <Footer className={ styles['social-icons'] }/>
        </>
    );
}