import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function TrafficChart() {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const chart = new Chart(canvasRef.current, {
			type: "doughnut",
			data: {
				labels: ["Direct", "Referral", "Social"],
				datasets: [
					{
						data: [55, 25, 20],
						backgroundColor: ["#36d1dc", "#ff9966", "#7f00ff"],
					},
				],
			},
		});

		return () => chart.destroy();
	}, []);

	return <canvas ref={canvasRef} />;
}
