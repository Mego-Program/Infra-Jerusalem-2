import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Badge from "@mui/material/Badge";
import { arrIcon, arrIcon2 } from "./Arr_Icons.jsx"; // importing the arrays of icons

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedButton, setSelectedButton] = React.useState(null);

  const [badgeNumber, setbadgeNumber] = React.useState(12); //use for Massage ChatOutlinedIcon badge
  const handleBadge = () => {
    setbadgeNumber();
  };

  const drawer = (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"#121231"}
      color={"white"}
    >
      <Toolbar sx={{ backgroundColor: "#121231" }} />
      <List sx={{ flex: 1 }}>
        {["Dashboard", "Projects", "Board", "Add User", "Massage"].map(
          (text, index) => (
            <ListItem key={text}>
              <ListItemButton
                onClick={() => setSelectedButton(index)} // Update the selected button when clicked
                sx={{
                  backgroundColor:
                    selectedButton === index ? "#F6C927" : "#121231",
                  "&:hover": {
                    backgroundColor: "#FFE356",
                    opacity: 0.8,
                  },
                  borderRadius: "10px", 
                }}
              >
                <ListItemIcon>{arrIcon[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      {/* <Divider /> */}
      <div style={{}}>
        <List sx={{ backgroundColor: "#121231", marginLeft: "0vh" }}>
          {["Settings", "info"].map((text, index) => (
            <ListItem key={text} /*disablePadding*/>
              <ListItemButton>
                <ListItemIcon sx={{ borderRadius: "50%" }}>
                  {arrIcon2[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
    {/* the standing 3 dot for mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle} //------------------------------------------------
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="#F6C927">
            Dashboard 
          </Typography>
          <PrimarySearchAppBar />
        </Toolbar>
        {/* <PrimarySearchAppBar /> */}
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
{/* for Desktop big screen */}
        <Drawer
          variant="permanent"
          
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: 'none'
              
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          backgroundColor: "#21213E",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh", //this make sure that it will cover the whole page
        }}
      >
        <Toolbar sx={{}} />
        <Typography paragraph sx={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enimputateis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum varius
          duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
          Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph sx={{ color: "white" }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. uismod lacinia at quis risus sed
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
