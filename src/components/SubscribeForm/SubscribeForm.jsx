import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
    return (
        <section className={ `${styles['subscribe-form']} bg-light` }>
            <div className="container">
                <h3 className="mb-4">Stay Updated with Our Latest Offers</h3>
                <form action="#" method="post">
                    <input className="mb-3 mb-md-0" type="email" placeholder="Enter your email" required />
                    <button type="submit" className={ styles['subscribe-btn'] }>Subscribe</button>
                </form>
            </div>
        </section>
    );
}