import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function Info() {
  return (
    <Box
      sx={{
        bgcolor: "#21213E",
        minHeight: "100%",
        color: "white",
        fontSize: "20px",
      }}
    >
      <Box sx={{padding:"20px"}}>
        <Typography variant="h5" sx={{pb:"15px", }}>
          <h2 style={{color:"#F6C927", display:"inline"}}>CodeClique</h2> is a dedicated web-based solution <br /> for project and task
          management tailored for businesses and organizations.
        </Typography>
        <Typography variant="h6">With CodeClique, companies can:</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Define, organize and track projects"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Set up teams and assign tasks"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Establish deadlines for tasks and sprints"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Provide dashboards for employees"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Enable internal communication"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        </List>
        <Typography variant="h6">Key features include:</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Customizable permission levels"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Real-time progress tracking"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Robust integrations"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon
                sx={{ fontSize: "medium", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Accessible on all devices"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        </List>
        <Typography variant="h6" sx={{pb:"15px", color:"#F6C927"}}>
          CodeClique offers organizations a streamlined way to manage<br /> projects,
          tasks, and employees - all from a single online platform. <br />Say goodbye
          to chaos and embrace structured efficiency with CodeClique.<br /> Get
          started today!
        </Typography>
      </Box>
    </Box>
  );
}
