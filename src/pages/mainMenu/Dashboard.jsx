// Dashboard.jsx
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import ChartContainer from "../../Components/ChartContainer";
import axios from "axios";


const Dashboard = () => {
  const [projects, setProjects] = useState({});
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);


  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://infra-jerusalem-2-server.vercel.app/userDetails",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        return response.data.userName
      }
    } catch (error) {
      console.log(error);
    }
  };


  const fetchUserProjects = async () => {
    try {
      const name = await fetchUserDetails();
      console.log(name);
      const encodedName = btoa(encodeURIComponent(name));
      console.log(encodedName);

      console.log("d:",decodeURIComponent(atob(encodedName)));
  
      const response = await axios.get(
        "https://project-jerusalem-2-server.vercel.app/desh/tasks",
        {
          headers: {
            Authorization: encodedName,
          },
        }
      );
  
      console.log(response.data);
  
      if (response.status === 200) {
        setProjects(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const fetchData = async () => {
      // await fetchUserDetails();
      fetchUserProjects();
      setLoading(false);
    // };
  
    // fetchData();
  }, []);

  const doughnutChartData = {
    labels: [
      "  Not Started      ",
      "  In Progress      ",
      "  Completed       ",
      "  Close               ",
    ],
    datasets: [
      {
        data: [projects.n, projects.i, projects.c, projects.f],
        backgroundColor: ["#36B176", "#3685B1", "#EE786C", "#F6C927"],
        hoverBackgroundColor: [
          "#36b17691",
          "#3686b189",
          "#ee796c88",
          "#f6c9278b",
        ],
        fontColor: "red", 
        // Set the font color to red

      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <Box
      sx={{
        bgcolor: "#21213E",
        maxHeight: "100%",
        color: "white",
        padding: "20px",
        fontSize: "20px",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          pl: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          mb={2}
          sx={{ color: "#F6C927", bgcolor: "#21213E" }}
        >
          Projects status chart
        </Typography>
        <Typography
          variant="h6"
          mb={2}
          sx={{ pl: "50px", color: "#F6C927", bgcolor: "#21213E" }}
        >
          Project urgency chart in days
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          bgcolor: "#21213E",
          color: "#F6C927",
          minHeight: "100%",
          borderRadius: "15px",
        }}
      >
        <ChartContainer
          doughnutData={doughnutChartData}
          barData={barChartData}
        />
      </Paper>
    </Box>
  );
};

export default Dashboard;
