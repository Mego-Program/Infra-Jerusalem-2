// DoughnutChart.jsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Box } from "@mui/material";

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart("doughnutChart", {
      type: "doughnut",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, [data]);

  return (
      <canvas
        style={{margin:"50px",padding:"20px", backgroundColor:"#121231", borderRadius: "15px" }}
        id="doughnutChart"
      />
  );
};

export default DoughnutChart;
