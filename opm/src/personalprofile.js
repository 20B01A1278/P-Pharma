import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "./personalprofile.css";
import { userid } from "./Main";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebase";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import updateprofile from "./Updateprofile";
import NavbarMain from "./NavbarMain";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
var finaluserData = {};
function PersonalProfile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userdetails = doc(db, "Users", userid);

        const data1 = await getDoc(userdetails);
        const userData = data1.data();
        setUserData(userData);
        finaluserData = userData;
      } catch (error) {
        // Handle any potential errors
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, []);

  console.log(userData);
  const navigate = useNavigate();

  const navigateToProfileUpdate = () => {
    navigate("/Updateprofile");
  };

  return (
    <>
      {/* <div>
      <NavbarMain/>
    </div> */}
      {/* <button onClick={HandleClick}>View</button> */}
      <div className="Container">
        <div className="photo_div">
          <MDBContainer sm="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  className="proimg"
                  src={userData.Image}
                  alt="avatar"
                />
                <br></br>
                <br></br>
                <p className="text-dark mb-4">{userData.name}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn
                    outline
                    className="ms-1"
                    onClick={navigateToProfileUpdate}
                  >
                    Update Profile
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
        <div className="info">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {userData.name}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {userData.email}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Password</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText type="password" className="text-muted">
                    {userData.Password}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Mobile</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {userData.PhoneNumber}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </>
  );
}
export { finaluserData };
export default PersonalProfile;

