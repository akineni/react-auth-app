import styles from './Charts.module.css';
import SalesChart from './SalesChart';
import TrafficChart from './TrafficChart';

export default function Charts() {
    return (
        <>
            {/* Charts */}
            <div className="row mt-4 g-4">
                <div className="col-md-6">
                    <div className={styles['chart-container']}>
                        <h5>Sales Overview</h5>
                        <SalesChart />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles['chart-container']}>
                        <h5>Traffic Sources</h5>
                        <TrafficChart />
                    </div>
                </div>
            </div>
        </>
    )
}