import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

// Styled Badge component with custom styling
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
  },
}));

// Main component for BadgeAvatars
export default function BadgeAvatars() {
  // State for badge visibility
  const [invisible, setInvisible] = useState(false);

  // Toggle badge visibility
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
    // Change to connected or not connected
    // You might want to update the comment here based on the actual behavior
  };

  return (
    <Button 
      sx={{ marginRight: '2vh' }} 
      onClick={handleBadgeVisibility}
    >
      {/* Avatar with an overlaid badge */}
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        invisible={invisible}
      >
        <Avatar alt="Emma Taylor" src="" />
      </StyledBadge>
    </Button>
  );
}
