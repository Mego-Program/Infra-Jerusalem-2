import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
  },
}));


export default function BadgeAvatars() {

  const [invisible, setInvisible] = React.useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);   // chang to conected or not conected
  };
  return (
    <Button 
    sx={{marginRight:'2vh'}} 
    onClick={()=>{    //  change onClike to show a menu 
      handleBadgeVisibility()
    }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        invisible={invisible}
      >
        <Avatar alt="Emma Taylor" src=""/>
      </StyledBadge>
      </Button>
  );
}



//================================

// <Badge
// badgeContent=" "
// variant="dot"
// color="greenBadge"
// anchorOrigin={{
//   vertical: "bottom",
//   horizontal: "right",
// }}
// >
// <Avatar
//   // alt="User Image"
//   src="D2.jpg" // Ensure the image path is correct
//   sx={{
//     width: 49,
//     height: 49,
//     borderRadius: "50%",
//     marginRight: 3, //this is to space them
//   }}
// />
// </Badge>