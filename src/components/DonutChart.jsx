import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Applied", "Interviewing", "Offered", "To Apply", "Rejected"],
    datasets: [
      {
        label: "Applications",
        data: [2, 2, 1, 1, 1], // Update with your real data
        backgroundColor: [
          "#36A2EB", // Applied (blue)
          "#9966FF", // Interviewing (purple)
          "#4BC0C0", // Offered (green)
          "#D3D3D3", // To Apply (light gray)
          "#FF6384", // Rejected (red)
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%", // controls the donut thickness
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
