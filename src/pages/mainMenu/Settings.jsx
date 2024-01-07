// import React from "react";
// import { Box } from "@mui/material";

// export default function Settings() {
//   return <Box sx={{ bgcolor: "#21213E", minHeight: "100%" ,color:"white", fontSize:"20px",}}>Settings</Box>;
// }
import React from "react";
import { Box, Button } from "@mui/material";

class FullScreenButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleFullScreen = this.handleFullScreen.bind(this);
  }

  handleFullScreen() {
    const elem = document.documentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
    } else {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
    }
  }

  render() {
    return (
      <Button sx={{ bgcolor:"#F6C927" }} onClick={this.handleFullScreen}></Button>
    );
  }
}

export default function Settings() {
  return (
    <Box
      sx={{
        bgcolor: "#21213E",
        minHeight: "100%",
        color: "white",
        fontSize: "20px",
      }}
    >
      Toggle Fullscreen
      <FullScreenButton />
    </Box>
  );
}
