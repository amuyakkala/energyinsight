import { useEffect, useState } from "react";
import { fetchEnergyData } from "../api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import EnergyChart from "../components/EnergyChart";

const Dashboard = () => {
  const [data, setData] = useState<any[]>([]);
  const { token } = useAuth();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [source, setSource] = useState("");
  const navigate = useNavigate();

  const fetchFilteredData = () => {
    const params = new URLSearchParams();
    if (startDate) params.append("start_date", startDate);
    if (endDate) params.append("end_date", endDate);
    if (source) params.append("source", source);
    if (token) {
      fetchEnergyData(token, params.toString()).then(setData);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchFilteredData(); // ✅ Use the filtered fetch even on first load
    }
  }, [token, navigate]);

  return (
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-2xl mb-4 font-bold">Energy Dashboard</h1>

      <div className="flex gap-4 mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Sources</option>
          <option value="solar">Solar</option>
          <option value="wind">Wind</option>
          <option value="grid">Grid</option>
        </select>
        <button
          onClick={fetchFilteredData}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>

      <div className="overflow-auto max-h-96">
        <table className="w-full table-auto border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Time</th>
              <th className="p-2 border">Consumption (kWh)</th>
              <th className="p-2 border">Generation (kWh)</th>
              <th className="p-2 border">Source</th> {/* ✅ Added Source column */}
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="p-2 border">{entry.timestamp}</td>
                <td className="p-2 border">{entry.consumption}</td>
                <td className="p-2 border">{entry.generation}</td>
                <td className="p-2 border">{entry.source || "N/A"}</td> {/* ✅ Show source */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EnergyChart data={data} />
    </div>
  );
};

export default Dashboard;