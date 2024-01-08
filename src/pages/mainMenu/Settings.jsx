import React, { useState } from "react";
import { Box, Typography, MenuItem } from "@mui/material";
import MyProfile from "../../Components/MyProfile";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import EditIcon from "@mui/icons-material/Edit";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Stack from "@mui/material/Stack";
import Brightness1SharpIcon from '@mui/icons-material/Brightness1Sharp';

export default function Settings() {
  const [fullscreenAlignment, setFullscreenAlignment] = useState(null);
  const [editAlignment, setEditAlignment] = useState(null);
  const [myProfileOpen, setMyProfileOpen] = useState(false);

  const handleFullscreenAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setFullscreenAlignment(newAlignment);

      const elem = document.documentElement;

      if (newAlignment === "full") {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
      } else if (newAlignment === "notFull") {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }
  };

  const handleEditAlignment = () => {
    setMyProfileOpen(true);
  };

  const handleClose = () => {
    setMyProfileOpen(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "#21213E",
        minHeight: "100%",
        color: "white",
        fontSize: "var(--global-font-size, 20px)",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{mr:"50px", display: "flex", flexDirection: "column", height:"150px", justifyContent:"space-around" }}
      >
        <Typography variant="h6" >
          <Brightness1SharpIcon sx={{ mr:"15px",fontSize:"small"}}/>
          Full Screen Toggle
        </Typography>
        <Typography variant="h6" >
        <Brightness1SharpIcon sx={{mr:"15px", fontSize:"small"}}/>

          Edit Profile
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex",  flexDirection: "column", height:"150px", justifyContent:"space-around" }}
      >
        <Stack direction="row" spacing={4}>
          <ToggleButtonGroup
            value={fullscreenAlignment}
            exclusive
            onChange={handleFullscreenAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              value="full"
              aria-label="Full-screen"
              sx={{
                backgroundColor:
                  fullscreenAlignment === "full"
                    ? "#F6C927 !important"
                    : "#888888",
                "&:hover": {
                  backgroundColor: "#f6c92769",
                },
              }}
            >
              <FullscreenIcon sx={{ color: "white" }} />
            </ToggleButton>
            <ToggleButton
              value="notFull"
              aria-label="Full-screen-Exit"
              sx={{
                backgroundColor:
                  fullscreenAlignment === "notFull"
                    ? "#F6C927 !important"
                    : "#888888",
                "&:hover": {
                  backgroundColor: "#f6c92769",
                },
              }}
            >
              <FullscreenExitIcon sx={{ color: "white" }} />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack direction="row" spacing={4} >
          <ToggleButton
            value="editProfile"
            aria-label="Edit Profile"
            onClick={handleEditAlignment}
            sx={{
              backgroundColor:
                editAlignment === "editProfile"
                  ? "#F6C927 !important"
                  : "#888888",
              "&:hover": {
                backgroundColor: "#f6c92769",
              },
            }}
          >
            <EditIcon sx={{ color: "white" }} />
          </ToggleButton>
        </Stack>
      </Box>

      <MyProfile
        open={myProfileOpen}
        onClose={handleClose}
        selectedValue="someValue"
      />
    </Box>
  );
}
