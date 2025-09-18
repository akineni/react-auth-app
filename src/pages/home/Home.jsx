import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import Navbar from '@components/Navbar/Navbar';
import HeroSection from '@components/HeroSection/HeroSection';
import FeaturedProducts from '@components/FeaturedProducts';
import Categories from '@components/Categories/Categories';
import Testimonials from '@components/Testimonials/Testimonials';
import SubscribeForm from '@components/SubscribeForm/SubscribeForm';
import Footer from '@components/Footer/Footer';
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import { unsplash } from '@lib/unsplash';

export default function Home() {
    useDocumentTitle("Home");

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
        {
            id: 1,
            message:
                "Amazing products! The customer service is top-notch and delivery was fast.",
            author: "John D.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 2,
            message:
                "I love shopping here. High-quality items at affordable prices.",
            author: "Jane S.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 3,
            message:
                "Great experience overall. I’ll definitely be coming back for more.",
            author: "Alice J.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
    ]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=6")
            .then((res) => res.json())
            .then(async (data) => {
                const productsWithUnsplash = await Promise.all(
                    data.map(async (product, index) => {
                        try {
                            // Add "product" keyword to get actual item photos, not models
                            const query = `${product.category} product`;

                            const result = await unsplash.search.getPhotos({
                                query,
                                perPage: 8, // fetch more variety
                                orientation: "landscape",
                            });

                            const photos = result.response?.results || [];
                            const chosenPhoto = photos[index % photos.length];

                            const imageUrl =
                                chosenPhoto?.urls?.raw ||
                                `https://picsum.photos/2000/1000?random=${index + 1}`;

                            return {
                                id: product.id,
                                name: product.title,
                                price: product.price,
                                image: `${imageUrl}&w=2000&h=1000&fit=crop&q=100&auto=format`, // Ultra HD
                            };
                        } catch (err) {
                            console.error("Unsplash error:", err);
                            return {
                                id: product.id,
                                name: product.title,
                                price: product.price,
                                image: `https://picsum.photos/2000/1000?random=${index + 1}`,
                            };
                        }
                    })
                );

                setProducts(productsWithUnsplash);
            });
    }, []);

    useEffect(() => {
        // Fetch categories + enhance with Unsplash images
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then(async (data) => {
                // take only 3 categories
                const limitedCategories = data.slice(0, 3);

                const categoriesWithImages = await Promise.all(
                    limitedCategories.map(async (name, index) => {
                        try {
                            const result = await unsplash.search.getPhotos({
                                query: `${name} product`, // add "product" keyword for relevance
                                perPage: 3, // fetch a few for variety
                                orientation: "landscape",
                            });

                            const photos = result.response?.results || [];
                            const chosenPhoto = photos[index % photos.length];

                            const imageUrl =
                                chosenPhoto?.urls?.raw ||
                                `https://picsum.photos/1600/1000?random=${index + 1}`;

                            return {
                                id: index + 1,
                                name: name.charAt(0).toUpperCase() + name.slice(1), // capitalize
                                image: `${imageUrl}&w=1600&h=1000&fit=crop&q=100&auto=format`, // Ultra HD
                            };
                        } catch (err) {
                            console.error("Unsplash error:", err);
                            return {
                                id: index + 1,
                                name: name.charAt(0).toUpperCase() + name.slice(1),
                                image: `https://picsum.photos/1600/1000?random=${index + 1}`,
                            };
                        }
                    })
                );

                setCategories(categoriesWithImages);
            });
    }, []);

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
                className={styles['cta-btn']}
            />

            {/* Featured Products Carousel */}
            <FeaturedProducts products={products} />

            {/* Categories Section */}
            <Categories categories={categories} />

            {/* Testimonials Section */}
            <Testimonials testimonials={testimonials} />

            {/* Subscribe Section */}
            <SubscribeForm />

            {/* Footer */}
            <Footer className={styles['social-icons']} />
        </>
    );
}