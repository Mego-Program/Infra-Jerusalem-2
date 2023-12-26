import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import BadgeAvatars from "./BadgeAvatars";
import { useNavigate } from "react-router-dom";
import MyProfile from './MyProfile';
import useUserDetails from "../atom/userAtom";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigeteSignIn = useNavigate();

  const open = Boolean(anchorEl);
  const [myProfileOpen, setMyProfileOpen] = React.useState(false); // State for MyProfile component

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    navigeteSignIn('/sign-in')

  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyProfileOpen = () => {
    setMyProfileOpen(true);
    handleClose();
  };

  const handleMyProfileClose = () => {
    setMyProfileOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip
          title="Account settings"
          sx={{ bgcolor: open ? "#F6C927" : "#21213E" }}
        >
          <IconButton
            onClick={handleClick}
            size="large"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreHorizIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Mobile view: Badge Avatars */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <Tooltip
          title="Account settings"
          sx={{ bgcolor: open ? "#F6C927" : "#121231" }}
        >
          <IconButton
            onClick={handleClick}
            size="large"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            backgroundColor: "#121231",
            border: "solid #21213E 5px",
            color: "white",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#121231",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleMyProfileOpen} // Use handleMyProfileOpen to open MyProfile
          sx={{
            "&:hover": {
              backgroundColor: "#21213E",
              color: "#F6C927",
              "& .MuiAvatar-root": {
                backgroundColor: "#21213E",
              },
              "& .MuiSvgIcon-root": {
                color: "#F6C927",
              },
            },
            "& .MuiAvatar-root": {
              backgroundColor: "#121231",
            },
          }}
        >
          <Avatar /> Profile
        </MenuItem>
       
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{
            "&:hover": {
              backgroundColor: "#21213E",
              color: "#F6C927",
              "& .MuiSvgIcon-root": {
                color: "#F6C927",
              },
            },
          }}
        >
          <ListItemIcon>
            <PersonAdd fontSize="small" sx={{ color: "white" }} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            "&:hover": {
              backgroundColor: "#21213E",
              color: "#F6C927",
              "& .MuiSvgIcon-root": {
                color: "#F6C927",
              },
            },
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: "white" }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          sx={{
            "&:hover": {
              backgroundColor: "#21213E",
              color: "#F6C927",
              "& .MuiSvgIcon-root": {
                color: "#F6C927",
              },
            },
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "white" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <MyProfile
        open={myProfileOpen}
        onClose={handleMyProfileClose}
        selectedValue="someValue" // Provide an appropriate selectedValue
      />
    </React.Fragment>
  );
}
