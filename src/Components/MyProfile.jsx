import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import UploadWidget from './UploadWidget';
import { Button } from '@mui/material';
import EditPassword from './EditPassword';

export const MyProfile = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{ }}>
      <DialogTitle sx={{ bgcolor: '#21213E', color: 'white', width: '300px',  }}>
        My Profile
      </DialogTitle>
      <UploadWidget />
      <EditPassword />
    </Dialog>
  );
};

MyProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default MyProfile;
