
import * as React from "react";
import FeedIcon from "@mui/icons-material/Feed";
import SpeedIcon from "@mui/icons-material/Speed";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoIcon from "@mui/icons-material/Info";
import Badge from "@mui/material/Badge";


export const arrIcon = [

    <SpeedIcon sx={{ color: "white" }} />,
    
    <FeedIcon sx={{ color: "white" }} />,
    <BrokenImageOutlinedIcon sx={{ color: "white" }} />,
    <PersonAddAltOutlinedIcon sx={{ color: "white" }} />,
    <Badge badgeContent={10} color="error"> {/* You might want to manage the badge content dynamically */}
      <ChatOutlinedIcon sx={{ color: "white" }} />
    </Badge>,
  ];
  
  export const arrIcon2 = [
    <SettingsOutlinedIcon sx={{ color: "white" }} />,
    <InfoIcon sx={{ color: "white" }} />,
  ];
  
 