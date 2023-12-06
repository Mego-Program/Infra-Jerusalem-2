import { useEffect, useRef } from "react";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: 'dne5dplkd',
                uploadPreset: 'nh9q390o'
            },
            // Handle success event
            (error, result) => {
                if (!error && result && result.event === 'success') {
                    // Access the uploaded file details
                    const publicId = result.info.public_id;
                    const imageUrl = result.info.secure_url;
                    console.log('Uploaded successfully. Public ID:', publicId);
                    console.log('Image URL:', imageUrl);

                    // Handle the file details as needed, e.g., save to state or server
                }
            }
        );
    }, []);

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    );
};

export default UploadWidget;
