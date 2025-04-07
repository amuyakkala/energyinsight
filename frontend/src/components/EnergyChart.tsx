import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

type Props = {
  data: Array<{
    timestamp: string;
    consumption: number;
    generation: number;
  }>;
};

const EnergyChart = ({ data }: Props) => {
  const [chartType, setChartType] = useState<"line" | "bar">("line");
  const chartData = {
    labels: data.map((entry) => new Date(entry.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "Consumption (kWh)",
        data: data.map((entry) => entry.consumption),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.3,
      },
      {
        label: "Generation (kWh)",
        data: data.map((entry) => entry.generation),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Energy Usage Chart</h2>
      {/* Toggle Chart Type */}
      <div className="mb-4">
        <button
          onClick={() => setChartType("line")}
          className={`px-4 py-2 mr-2 rounded ${
            chartType === "line" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Line Chart
        </button>
        <button
          onClick={() => setChartType("bar")}
          className={`px-4 py-2 rounded ${
            chartType === "bar" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Bar Chart
        </button>
      </div>

      {/* Render Chart */}
      {chartType === "line" ? (
        <Line data={chartData} />
      ) : (
        <Bar data={chartData} />
      )}
    </div>
  );
};

export default EnergyChart;
