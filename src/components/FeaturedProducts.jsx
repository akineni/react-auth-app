export default function FeaturedProducts({ products  }) {
    return (    
        <section className="py-5">
            <div className="container">
                <h2 className="mb-4 text-center">Featured Products</h2>
                <div id="featuredProductsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            products.map((product, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={product.id}>
                                    <img src={product.image} className="d-block w-100" alt={product.name} />
                                </div>
                            ))
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#featuredProductsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#featuredProductsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}