// BarChart.jsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart("barChart", {
      type: "bar",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: "#f6c92740",
            },
          },
          y: {
            grid: {
              color: "#f6c92740",
            },
          },
        },
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, [data]);

  return (
    <canvas
      style={{ margin: "50px", padding: "20px", backgroundColor: "#121231", borderRadius: "15px" }}
      id="barChart"
    />
  );
};

export default BarChart;
