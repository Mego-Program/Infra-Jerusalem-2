import * as React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import useUserDetails from "../atom/userAtom";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
  },
}));

export default function BadgeAvatars({img}) {
  const [invisible, setInvisible] = useState(false);
  const [userDetails, setUserDetails] = useUserDetails();


  return (
    <Button sx={{ marginRight: "2vh" }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        invisible={invisible}
      >
        <Avatar
          alt={userDetails.userName}
          src={img || getInitials(userDetails.userName)}
        />
      </StyledBadge>
    </Button>
  );
}

// Helper function to get initials from a username
function getInitials(username) {
  return username ? username.charAt(0).toUpperCase() : "";
}
