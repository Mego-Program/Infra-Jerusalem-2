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
import { useState, useEffect } from "react";

const onSubmit = (values) => {
  console.log("form data", values);
};

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
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
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
    verifyPassword:"",
  };

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
              My Profile
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                marginBottom: "3%",
              }}
            >
              <img
                src={userDetails.img}
                alt=""
                style={{
                  width: "22%",
                  borderRadius: "50%",
                  marginBottom: "3%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  justifyContent: "space-between",
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
                marginBottom: "4%",
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
                  height: "60%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                }}
              />
              <ErrorMessage name="firstName" className="error-message" />
            </div>

            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginBottom: "4%",
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
                  height: "60%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                }}
              />
              <ErrorMessage name="lastName" className="error-message" />
            </div>

            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginBottom: "4%",
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
                  height: "60%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                 }}
              />
              <ErrorMessage name="newPassword" className="error-message" />
            </div>

            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginBottom: "4%",
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
                  height: "60%",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                 }}
              />
              <ErrorMessage name="verifyPassword" className="error-message" />
            </div>

            <button type="submit" style={{backgroundColor:"#F6C927", borderRadius:"10px", height:"5%",width:"20%"}}>Save</button>
          </Form>
        </Formik>
      </div>
    </Dialog>
  );
};

export default MyProfile;
