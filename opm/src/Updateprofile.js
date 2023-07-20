import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { db } from "./firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";
import { Routes, Route, useNavigate } from "react-router-dom";
import { userid } from "./Main";
import { finaluserData } from "./personalprofile";

import { storage } from "./firebase";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import InputControl from "./InputControl";
import './InputControl.css';
// import './Signup.css';
import "./Updateprofile.css";
import Swal from "sweetalert2";
import NavbarMain from "./NavbarMain";

function Signup() {
  const UserData = {};
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [values, setValues] = useState(finaluserData);

  console.log(values);
  const navigate = useNavigate();

  const addProduct = async () => {
    try {
      updateDoc(doc(db, "Users", userid), {
        name: values.name,
        PhoneNumber: values.PhoneNumber,
        Password: values.Password,
        Image: values.Image,
      });
    } catch (error) {
      // alert("Error adding product: " + error);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    try {
      const file = document.getElementById("image12").files[0];

      if (!file) {
      }

      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",

        (snapshot) => {},

        (error) => {
          // alert("Error uploading image: " + error);
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              values.Image = downloadURL;

              console.log(downloadURL);

              addProduct();
            })

            .catch((error) => {
              // alert("Error getting image URL: " + error);
            });
        }
      );
    } catch (error) {
      // alert("Error uploading image: " + error);
    }

    console.log(values);
    swal({
      title: "Are you sure?",
      text: "Do you want to update the profile ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUpdate) => {
      if (willUpdate) {
        swal("Poof! Your profile is updated!", {
          icon: "success",
        });
        // window.location.reload();
        navigate("/history");
      } else {
        swal("Your profile is not updated!");
        navigate("/history");
      }
    });
  };
  return (
    <>
      <NavbarMain/>
      <div className="lcontainer">
        <div className="ldinnerBox">
          <h1 className="heading">Update Profile</h1>

          <InputControl
            label="Name"
            type="text"
            value={values.name}
            placeholder=""
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          {/* <br></br> */}
          <InputControl
            label="Password"
            type="password"
            value={values.Password}
            placeholder=""
            onChange={(event) =>
              setValues((prev) => ({ ...prev, Password: event.target.value }))
            }
          />
          <InputControl
            value={values.PhoneNumber}
            label="Phone number"
            type="phone"
            placeholder=""
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                PhoneNumber: event.target.value,
              }))
            }
          />
          <InputControl
            label="Profile Photo"
            type="file"
            id="image12"
            accept="image/*"
            placeholder="upload"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, Image: event.target.value }))
            }
          />
          <div className="foot">
            <button onClick={handleUpdate}>Update Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
