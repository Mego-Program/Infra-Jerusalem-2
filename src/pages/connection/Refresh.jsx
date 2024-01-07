import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        p: "0px",
        m: "0px",
        width: "100vw",
        height: "100vh",
        bgcolor: "#21213E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
      }}
    >
      <svg
        width="101"
        height="115"
        viewBox="0 0 101 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.2397 2.69504L50.5 2.27581L49.7603 2.69504L26.4878 15.8859L26.4775 15.8918L26.4672 15.8978L3.40734 29.457L2.67445 29.8879L2.66769 30.7381L2.45505 57.4881L2.45495 57.5L2.45505 57.5119L2.66769 84.2619L2.67445 85.1121L3.40734 85.543L26.4672 99.1022L26.4775 99.1082L26.4878 99.1141L49.7603 112.305L50.5 112.724L51.2397 112.305L74.5121 99.1141L74.5225 99.1082L74.5328 99.1022L97.5927 85.543L98.3256 85.1121L98.3323 84.2619L98.545 57.5119L98.545 57.5L98.545 57.4881L98.3323 30.7381L98.3256 29.8879L97.5927 29.457L74.5328 15.8978L74.5225 15.8918L74.5121 15.8859L51.2397 2.69504Z"
          stroke="#F6C927"
          stroke-width="3"
        />
        <path
          d="M42.2383 68.6157L26 61.4278V55.2219L42.2383 48.034V53.965L27.8661 60.0138V56.6359L42.2383 62.6847V68.6157Z"
          fill="#F6C927"
        />
        <path
          d="M42.9039 76L53.7076 39H59.4041L48.6004 76H42.9039Z"
          fill="#F6C927"
        />
        <path
          d="M59.7617 68.6157V62.6847L74.1339 56.6359V60.0138L59.7617 53.965V48.034L76 55.2219V61.4278L59.7617 68.6157Z"
          fill="#F6C927"
        />
      </svg>

      <CircularProgress sx={{mt:"50px", color: "#F6C927" }} />
    </Box>
  );
}
