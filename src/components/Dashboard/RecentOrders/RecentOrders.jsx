import styles from './RecentOrders.module.css';

export default function RecentOrders() {
    return (
        <>
            {/* Recent Orders */}
            <div className={`${styles['recent-orders']} mt-4`}>
                <h5>Recent Orders</h5>
                <div className="table-responsive">
                    <table className="table align-middle mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1001</td>
                                <td>Sarah P.</td>
                                <td>Smartphone</td>
                                <td><span className="badge bg-success">Completed</span></td>
                                <td>$599</td>
                            </tr>
                            <tr>
                                <td>1002</td>
                                <td>John D.</td>
                                <td>Sneakers</td>
                                <td><span className="badge bg-warning">Pending</span></td>
                                <td>$120</td>
                            </tr>
                            <tr>
                                <td>1003</td>
                                <td>Emma R.</td>
                                <td>Coffee Maker</td>
                                <td><span className="badge bg-danger">Cancelled</span></td>
                                <td>$89</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}