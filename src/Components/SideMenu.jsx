function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const arrIcon = [
      <SpeedIcon sx={{ color: "white" }} />,
      <FeedIcon sx={{ color: "white" }} />,
      <BrokenImageOutlinedIcon sx={{ color: "white" }} />,
      <PersonAddAltOutlinedIcon sx={{ color: "white" }} />,
      <ChatOutlinedIcon sx={{ color: "white" }} />,
    ];
    const arrIcon2 = [
      <SettingsOutlinedIcon sx={{ color: "white" }} />,
      <InfoIcon sx={{ color: "white" }} />,
    ];
    const drawer = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#121231",
          color: "white",
          height: "100%",
          
        }}
      >
        <Toolbar sx={{ backgroundColor: "#121231"}} />
        {/* <Divider /> */}
        {/* 3vh  is to center the menu */}
        <List sx={{ flex: 1, marginLeft:'0vh' }}> 
          {["Deshboard", "Projects", "Board", "Add User", "Massage"].map(
            (text, index) => (
              <ListItem key={text} /*disablePadding*/ sx={{}}>
                <ListItemButton>
                  <ListItemIcon>{arrIcon[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        {/* <Divider /> */}
        <div style={{}}>
          <List sx={{ backgroundColor: "#121231", marginLeft:'0vh' }}>
            {["Settings", "info"].map((text, index) => (
              <ListItem key={text} /*disablePadding*/>
                <ListItemButton>
                  <ListItemIcon>{arrIcon2[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
            }