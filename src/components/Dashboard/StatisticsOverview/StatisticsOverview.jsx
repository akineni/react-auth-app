import styles from './StatisticsOverview.module.css';

export default function StatisticsOverview() {
    return (
        <>
            {/* Stat Cards */}
            <div className="row mt-4 g-4">
                <div className="col-md-3">
                    <div className={`${styles['stat-card']} ${styles['bg-gradient-orange']} text-white`}>
                        <i className="fas fa-shopping-cart"></i>
                        <h4 className="mt-3">1,245</h4>
                        <p>Orders</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles['stat-card']} ${styles['bg-gradient-blue']} text-white`}>
                        <i className="fas fa-users"></i>
                        <h4 className="mt-3">3,560</h4>
                        <p>Customers</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles['stat-card']} ${styles['bg-gradient-green']} text-white`}>
                        <i className="fas fa-box"></i>
                        <h4 className="mt-3">120</h4>
                        <p>Products</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles['stat-card']} ${styles['bg-gradient-purple']} text-white`}>
                        <i className="fas fa-dollar-sign"></i>
                        <h4 className="mt-3">$25,430</h4>
                        <p>Revenue</p>
                    </div>
                </div>
            </div>
        </>
    )
}