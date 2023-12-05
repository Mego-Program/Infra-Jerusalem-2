import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoIcon from "@mui/icons-material/Info";
import Badge from "@mui/material/Badge";

// Array of icons for the first set of links
export const linksTop = [
  { to: "dashboard", icon: <SpeedIcon />, text: "Dashboard" },
  { to: "projects", icon: <FeedOutlinedIcon />, text: "Projects" },
  { to: "board", icon: <BrokenImageOutlinedIcon />, text: "Board" },
  { to: "add-user", icon: <PersonAddAltOutlinedIcon />, text: "Add User" },
  {
    to: "messages",
    icon: (
      // Badge for the Messages icon
      <Badge badgeContent={10} color="error">
        <ChatOutlinedIcon />
      </Badge>
    ),
    text: "Messages",
  },
];

// Array of icons for the second set of links
export const linksBottom = [
  { to: "settings", icon: <SettingsOutlinedIcon />, text: "Settings" },
  { to: "info", icon: <InfoIcon />, text: "Info" },
];
