import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function SalesChart() {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const chart = new Chart(canvasRef.current, {
			type: "line",
			data: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
				datasets: [
					{
						label: "Sales ($)",
						data: [1200, 1900, 3000, 2500, 3200, 4100],
						borderColor: "#ff5e62",
						backgroundColor: "rgba(255, 94, 98, 0.2)",
						fill: true,
						tension: 0.4,
					},
				],
			},
		});

		return () => chart.destroy();
	}, []);

	return <canvas ref={canvasRef} />;
}
