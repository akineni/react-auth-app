import styles from './Charts.module.css';

export default function Charts() {
    return (
        <>
            {/* Charts */}
            <div className="row mt-4 g-4">
                <div className="col-md-6">
                    <div className={styles['chart-container']}>
                        <h5>Sales Overview</h5>
                        <canvas id="salesChart"></canvas>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles['chart-container']}>
                        <h5>Traffic Sources</h5>
                        <canvas id="trafficChart"></canvas>
                    </div>
                </div>
            </div>
        </>
    )
}