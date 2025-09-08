import styles from './Testimonials.module.css';

export default function Testimonials({ testimonials }) {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="mb-4 text-center">What Our Customers Say</h2>
                <div className="row">
                    {
                        testimonials.map((testimonial, index) => (
                            <div className="col-md-4" key={ index }>
                                <div className={styles['testimonial-card'] }>
                                    <p>{ testimonial.message }</p>
                                    <p className="font-weight-bold">- { testimonial.author }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}