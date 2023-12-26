// import * as React from "react";
// import PropTypes from "prop-types";
// import DialogTitle from "@mui/material/DialogTitle";
// import Dialog from "@mui/material/Dialog";
// import UploadWidget from "./UploadWidget";
// import { Button } from "@mui/material";
// import EditPassword from "./EditPassword";
// import { useState, useEffect } from "react";
// import BadgeAvatars from "./BadgeAvatars";

// const MyProfile = (props) => {
//   const { onClose, selectedValue, open } = props;
//   const [userDetails, setUserDetails] = useState({});

//   useEffect(() => {
//     const user = localStorage.getItem("userDetails");
//     const userParse = JSON.parse(user);
//     setUserDetails(userParse);
//   }, []);

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   return (
//     <Dialog onClose={handleClose} open={open} sx={{}}>
//       <div
//         style={{
// width: "80vh",
// height: "70vh",
// backgroundColor: "#21213E",
// border: "2px solid #F6C927",
// color: "white",
//         }}
//       >
// <div
//   style={{
// display: "flex",
// flexDirection: "column",
// textAlign: "center",
// alignItems: "center",
// padding: "5%",
// width: "100%",
// height: "100%",
//   }}
// >
// <h1
//   style={{
//     width: "100%",
//     color: "#F6C927",
//     borderBottom: "2px solid #F6C927",
//     marginBottom: "7%",
//   }}
// >
//   My Profile
// </h1>
// <img
//   src={userDetails.img}
//   alt=""
//   style={{ width: "18%", borderRadius: "50%", marginBottom: "3%" }}
// />
//           <div
//             style={{
// display: "flex",
// flexDirection: "row",
// width: "100%",
// justifyContent: "space-around",
// marginBottom: "3%"
//             }}
//           >
// <div>
//   <h5 style={{ color: "#F6C927" }}>User name </h5>
//   <h4>{userDetails.userName}</h4>
// </div>
// <div>
//   <h5 style={{ color: "#F6C927" }}>Email </h5>
//   <h4>{userDetails.email}</h4>
// </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               justifyContent: "space-around",
//               marginBottom: "3%"
//             }}
//           >
//             <div>
//               <h5 style={{ color: "#F6C927" }}>First name </h5>
//               <import style={{}} ></import>
//             </div>
//             <div>
//               <h5 style={{ color: "#F6C927" }}>Last name </h5>
//               <h4>{userDetails.email}</h4>
//             </div>
//           </div>
//         </div>
//         {/* <UploadWidget /> */}
//         {/* <EditPassword /> */}
//       </div>
//     </Dialog>
//   );
// };

// MyProfile.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

// export default MyProfile;

// ============================================================================================

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect, useRef} from "react";
import { color } from "@mui/system";


const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Required"),

  verifyPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
});

const MyProfile = (props) => {
  const { onClose, selectedValue, open } = props;
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("userDetails");
    const userParse = JSON.parse(user);
    setUserDetails(userParse);
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const initialValues = {
    firstName: `${userDetails.firstName}`,
    lastName: `${userDetails.lastName}`,
    newPassword: "",
    verifyPassword: "",
  };

  const changeImage = () => {
    // Assuming you have a new image URL or logic to fetch a new image URL
    const newImageUrl = "new_image_url.jpg";

    // Update the userDetails state with the new image
    setUserDetails({ ...userDetails, img: newImageUrl });
  };

  const onSubmit = async (values) => {
    console.log("form data:", values);

    try {
      const response = await axios.post(
        "https://infra-jerusalem-2-server.vercel.app/signup",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          userName: userDetails.userName,
          password: values.password,
          email: userDetails.email,
          img: userDetails.img,
        }
      );

      if (response.status === 200) {
        const emailVerificationResponse = await axios.post(
          "https://infra-jerusalem-2-server.vercel.app/sendemail",
          {
            email: formData.get("email"),
          }
        );

        if (emailVerificationResponse.status === 200) {
          setEmail(formData.get("email"));
          navigateVerify("/verify");
        } else {
          console.error("Email verification request failed");
        }
      } else {
        console.error("Signup request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

//-----------------------

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
    <Dialog onClose={handleClose} open={open} sx={{}}>
      <div
        style={{
          width: "70vh",
          height: "90vh",
          backgroundColor: "#21213E",
          border: "2px solid #F6C927",
          color: "white",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          style={{ width: "100%", height: "100%" }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              padding: "5%",
              width: "100%",
              height: "100%",
            }}
          >
            <h1
              style={{
                width: "100%",
                color: "#F6C927",
                borderBottom: "2px solid #F6C927",
                marginBottom: "7%",
              }}
            >
              Your Profile
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                marginBottom: "2%",
              }}
            >
              <div
                style={{
                  width: "22%",
                  marginBottom: "3%",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <img
                  src={userDetails.img}
                  alt=""
                  style={{
                    width: "100px",
                    height:"100px",
                    borderRadius: "50%",
                  }}
                />
                                <button
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    right: "0%",
                    height: "0%",
                    width: "18%",
                    backgroundColor: "transparent",
                    border: "0",
                  }}
                  onClick={() => widgetRef.current.open()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                    style={{
                      position: "absolute",
                      bottom: "-5%",
                      right: "-30%",
                    }}
                  >
                    <path
                      fill="#f6c927"
                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                    />
                  </svg>
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <h5 style={{ color: "#F6C927" }}>User name </h5>
                  <h4>{userDetails.userName}</h4>
                </div>
                <div>
                  <h5 style={{ color: "#F6C927" }}>Email </h5>
                  <h4>{userDetails.email}</h4>
                </div>
              </div>
            </div>
            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginBottom: "2%",
                width: "90%",
                height: "80px",
              }}
            >
              <label htmlFor="firstName" style={{ color: "#F6C927" }}>
                First name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                style={{
                  height: "35%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                  fontSize: "100%",
                }}
              />
              <div style={{ color: "red", fontSize: "85%" }}>
                <ErrorMessage name="firstName" className="error-message" />
              </div>
            </div>

            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginBottom: "2%",
                width: "90%",
                height: "80px",
              }}
            >
              <label htmlFor="lastName" style={{ color: "#F6C927" }}>
                Last name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                style={{
                  height: "35%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                  fontSize: "100%",
                }}
              />
              <div style={{ color: "red", fontSize: "85%" }}>
                <ErrorMessage name="lastName" className="error-message" />
              </div>
            </div>

            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginBottom: "2%",
                width: "90%",
                height: "80px",
              }}
            >
              <label htmlFor="newPassword" style={{ color: "#F6C927" }}>
                New password
              </label>
              <Field
                type="password"
                id="newPassword"
                name="newPassword"
                style={{
                  height: "35%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                  fontSize: "100%",
                }}
              />
              <div style={{ color: "red", fontSize: "85%" }}>
                <ErrorMessage name="newPassword" className="error-message" />
              </div>
            </div>

            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginBottom: "2%",
                width: "90%",
                height: "80px",
              }}
            >
              <label htmlFor="verifyPassword" style={{ color: "#F6C927" }}>
                Verify password
              </label>
              <Field
                type="password"
                id="verifyPassword"
                name="verifyPassword"
                style={{
                  height: "35%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                  fontSize: "100%",
                }}
              />
              <div style={{ color: "red", fontSize: "85%" }}>
                <ErrorMessage name="verifyPassword" className="error-message" />
              </div>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#F6C927",
                borderRadius: "10px",
                height: "5%",
                width: "20%",
              }}
            >
              Save
            </button>
          </Form>
        </Formik>
      </div>
    </Dialog>
  );
};

export default MyProfile;
