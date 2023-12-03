import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
  },
}));

export default function BadgeAvatars() {
  // const [altName, setAltName] = useState("")
  const [invisible, setInvisible] = useState(false);
  const userName = "M"
  const [uploadedImage, setUploadedImage] = useState(
    "https://example.com/default-face-image.jpg"
  );
  const [anchorEl, setAnchorEl] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_cloudinary_upload_preset");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;
      setUploadedImage(imageUrl);

      // Save imageUrl to your database or perform other actions
      // e.g., send it to the server via API
      console.log("Image URL:", imageUrl);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const handleBadgeVisibility = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUploadPicture = () => {
    const input = document.getElementById("image-input");
    input.click();
    handleClose();
  };

  const handleDeleteImage = () => {
    setUploadedImage("https://example.com/default-face-image.jpg");
    handleClose();
  };

  return (
    <div>
      <Button
        {...getRootProps()}
        sx={{ marginRight: "2vh", position: "relative" }}
        onClick={handleBadgeVisibility}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          invisible={invisible}
        >
          <Avatar alt={userName} src={uploadedImage} />
        </StyledBadge>
        <input
          {...getInputProps()}
          id="image-input"
          style={{ display: "none" }}
        />
      </Button>

      {uploadedImage && (
        <Button
          onClick={handleDeleteImage}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          {/* <DeleteIcon /> */}
        </Button>
      )}
    </div>
  );
}
