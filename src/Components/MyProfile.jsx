import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Avatar, Typography } from "@mui/material";

const MyProfile = (props) => {
//=====================================================
const [isButtonOn, setIsButtonOn] = useState(false);
const toggleButton = () => {
  setIsButtonOn(!isButtonOn);
};
//======================================================

  //  validation
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    ...(isButtonOn && {
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
    }),
  });

  const { onClose, selectedValue, open } = props;

  const [userDetails, setUserDetails] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [img, setImg] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://infra-jerusalem-2-server.vercel.app/userDetails",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        // console.log("response: ", response);
        setUserDetails(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setImg(response.data.img);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
    if (isButtonOn) {
      toggleButton();
    }
  };

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    newPassword: "",
    verifyPassword: "",
  };

  const onSubmit = async (values) => {
    // console.log("form data:", values);
    const token = localStorage.getItem("token");
    setFirstName(values.firstName);
    setLastName(values.lastName);
    if (isButtonOn) {
      try {
        const response = await axios.post(
          "https://infra-jerusalem-2-server.vercel.app/editProfile",
          {
            firstName: values.firstName,
            lastName: values.lastName,
            userName: userDetails.userName,
            password: values.newPassword,
            email: userDetails.email,
            img: img,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );

        if (response.status === 200) {
          // console.log(response);
          handleClose();
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post(
          "https://infra-jerusalem-2-server.vercel.app/editShortProfile",
          {
            firstName: values.firstName,
            lastName: values.lastName,
            userName: userDetails.userName,
            email: userDetails.email,
            img: img,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );

        if (response.status === 200) {
          // console.log(response);
          handleClose();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  //-----------------------

  const widgetRef = useRef();

  useEffect(() => {
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "dne5dplkd",
        uploadPreset: "nh9q390o",
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          const publicId = result.info.public_id;
          const imageUrl = result.info.secure_url;
          setImg(imageUrl);

          console.log("Uploaded successfully. Public ID:", publicId);
          console.log("Image URL:", imageUrl);
        }
      }
    );
  }, []);

  return (
    <Dialog onClose={handleClose} open={open} sx={{}}>
      <div
        style={{
          width: "400px",
          height: "100%",
          backgroundColor: "#21213E",
          border: "2px solid #F6C927",
          color: "white",
          margin: "0",
          padding: "0",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          style={{ width: "400px", height: "100%" }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              padding: "0px 20px",
              width: "398px",
              height: "100%",
            }}
          >
            <h1
              style={{
                width: "100%",
                color: "#F6C927",
                borderBottom: "1px solid #F6C927",
                marginBottom: "15px",
              }}
            >
              Your Profile
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "325px",
                height: "110px",
                justifyContent: "space-between",
              }}
            >
              {img ? (
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      width: "20px",
                      height: "20px",
                      bottom: "8px",
                      right: "-5px",
                      backgroundColor: "transparent",
                      border: "0",
                    }}
                    onClick={() => widgetRef.current.open()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{
                        position: "absolute",
                        bottom: "-0.5px",
                        right: "-3.5px",
                        width: "22px",
                        height: "22px",
                        fill: isHovered ? "rgb(249, 227, 149)" : "#f6c927",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Avatar
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      width: "20px",
                      height: "20px",
                      bottom: "8px",
                      right: "-5px",
                      backgroundColor: "transparent",
                      border: "0",
                    }}
                    onClick={() => widgetRef.current.open()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{
                        position: "absolute",
                        bottom: "-0.5px",
                        right: "-3.5px",
                        width: "22px",
                        height: "22px",
                        fill: isHovered ? "rgb(249, 227, 149)" : "#f6c927",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                    </svg>
                  </button>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  justifyContent: "space-between",
                  height: "108px",
                }}
              >
                <div style={{ paddingTop: "2px" }}>
                  <Typography
                    style={{
                      color: "#F6C927",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    User name
                  </Typography>
                  <Typography>{userDetails.userName}</Typography>
                </div>
                <div style={{ paddingBottom: "4px" }}>
                  <Typography
                    style={{
                      color: "#F6C927",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography>{userDetails.email}</Typography>
                </div>
              </div>
            </div>
            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                width: "325px",
                height: "75px",
              }}
            >
              <label
                htmlFor="firstName"
                style={{
                  color: "#F6C927",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                First name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                style={{
                  height: "30px",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                  fontSize: "90%",
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
                width: "325px",
                height: "75px",
              }}
            >
              <label
                htmlFor="lastName"
                style={{
                  color: "#F6C927",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Last name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                style={{
                  height: "30px",
                  width: "100%",
                  backgroundColor: "#21213E",
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid #F6C927",
                  fontSize: "90%",
                }}
              />
              <div style={{ color: "red", fontSize: "85%" }}>
                <ErrorMessage name="lastName" className="error-message" />
              </div>
            </div>

            <div style={{ width: "325px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  checked={isButtonOn}
                  onChange={toggleButton}
                  style={{ width: "17px", height: "17px", marginTop: "0" }}
                />
                <Typography>change Password</Typography>
              </div>

              {isButtonOn ? (
                <>
                  <div
                    className="form-control"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "start",
                      width: "325px",
                      height: "75px",
                    }}
                  >
                    <label
                      htmlFor="newPassword"
                      style={{
                        color: "#F6C927",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      New password
                    </label>
                    <Field
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      style={{
                        height: "30px",
                        width: "100%",
                        backgroundColor: "#21213E",
                        color: "white",
                        borderRadius: "5px",
                        border: "1px solid #F6C927",
                        fontSize: "90%",
                      }}
                    />
                    <div style={{ color: "red", fontSize: "85%" }}>
                      <ErrorMessage
                        name="newPassword"
                        className="error-message"
                      />
                    </div>
                  </div>

                  <div
                    className="form-control"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "start",
                      width: "325px",
                      height: "75px",
                    }}
                  >
                    <label
                      htmlFor="verifyPassword"
                      style={{
                        color: "#F6C927",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Verify password
                    </label>
                    <Field
                      type="password"
                      id="verifyPassword"
                      name="verifyPassword"
                      style={{
                        height: "30px",
                        width: "100%",
                        backgroundColor: "#21213E",
                        color: "white",
                        borderRadius: "5px",
                        border: "1px solid #F6C927",
                        fontSize: "90%",
                      }}
                    />
                    <div style={{ color: "red", fontSize: "85%" }}>
                      <ErrorMessage
                        name="verifyPassword"
                        className="error-message"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div
              style={{
                width: "325px",
                marginTop: "12px",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <button
                type="button"
                style={{
                  backgroundColor: "#F6C927",
                  borderRadius: "10px",
                  height: "30px",
                  width: "80px",
                }}
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: "#F6C927",
                  borderRadius: "10px",
                  height: "30px",
                  width: "80px",
                }}
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Dialog>
  );
};

export default MyProfile;
