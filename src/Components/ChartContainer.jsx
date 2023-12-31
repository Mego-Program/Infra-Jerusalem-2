// ChartContainer.jsx
import React from "react";
import { Box } from "@mui/material";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

const ChartContainer = ({ doughnutData, barData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#21213E",
        height: "480px",
        borderRadius:"15px"
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginRight: "20px",
          margin: "0 auto",
        }}
      >
        <DoughnutChart data={doughnutData} />
      </Box>
      <Box sx={{ flex: 1, margin: "0 auto", }}>
        <BarChart data={barData} />
      </Box>
    </Box>
  );
};

export default ChartContainer;
