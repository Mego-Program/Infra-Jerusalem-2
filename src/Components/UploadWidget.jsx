import { Try } from "@mui/icons-material";
import { useEffect, useRef } from "react";
import axios from "axios";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
const uploadImg = async (url) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        "https://infra-jerusalem-2-server.vercel.app/uploadimg",
        {
          img: url,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        return <PrimarySearchAppBar/>
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const UploadWidget = () => {
    const widgetRef = useRef();
  
    useEffect(() => {
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: 'dne5dplkd',
          uploadPreset: 'nh9q390o',
        },
        // Handle success event
        (error, result) => {
          if (!error && result && result.event === 'success') {
            const publicId = result.info.public_id;
            const imageUrl = result.info.secure_url;
            uploadImg(imageUrl);
  
            console.log('Uploaded successfully. Public ID:', publicId);
            console.log('Image URL:', imageUrl);
          }
        }
      );
    }, []);
  
    return (
      <button  style={{backgroundColor:"#21213E", color:"white", width:"300px", height:"50px"}} onClick={() => widgetRef.current.open()}>
        <h2>Edit Image</h2>
      </button>
    );
  };
  
  export default UploadWidget;
  