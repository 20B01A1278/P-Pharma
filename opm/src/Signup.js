// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import InputControl from "./InputControl";
// import { auth } from "./firebase";
// import db from "./firebase"
// import { collection, addDoc } from "firebase/firestore";
// import "./Signup.css";
// import Navbar from './Navbar' ;
// function Signup() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     ph:"",
//     pwd: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.name || !values.email || !values.pwd) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.pwd)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
//         addDoc(collection(db, "Users"), {
//             name:values.name,
//             email:values.email,
//             Password:values.pwd,
//             PhoneNumber:values.ph,
//           }).then(()=>{
//             navigate("/");
//         })
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };

//   return (
//     <div>
//       <Navbar />
//     <div className='lcontainer'>
//       <div className='innerBox'>
//         <h1 className='heading'><b>Signup</b></h1>

//         <InputControl
//           label="Name" type="text"
//           placeholder="Enter your name"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, name: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Email" type="email"
//           placeholder="Enter email address"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Password" type="password"
//           placeholder="Enter password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pwd: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Phone number" type="phone"
//           placeholder="Enter phone number"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, ph: event.target.value }))
//           }
//         />

//         <div className='foot'>
//           <b className='error'>{errorMsg}</b>
//           <button onClick={handleSubmission} disabled={submitButtonDisabled}>
//             SIGNUP
//           </button>
//           <p>
//             Already have an account?{" "}
//             <span>
//               <Link to="/login"><u>LOGIN</u></Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }
// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "./InputControl";
//import { auth } from "./firebase";
import db from "./firebase";
import { Form } from "react-bootstrap";
import { collection, addDoc, doc } from "firebase/firestore";
import "./Signup.css";
import Navbar from "./Navbar";
function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    ph: "",
    pwd: "",
    Docid: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
      if (!values.name || !values.email || !values.pwd) {
        setErrorMsg("Fill all fields");

        // setErrorMsg("");

        return;
      }

      if (!validateName(values.name)) {
        setErrorMsg("Please enter a valid name");
        return;
      }

      if (!validateEmail(values.email)) {
        setErrorMsg("Please enter a valid email address");
        return;
      }

      if (!validatePassword(values.pwd)) {
        let errorMsg = "";
        if (values.pwd.length < 8) {
          errorMsg += "\n- Minimum length of 8 characters";
        }
        if (!/(?=.*[a-z])/.test(values.pwd)) {
          errorMsg += "\n- At least one lowercase letter";
        }

        if (!/(?=.*[A-Z])/.test(values.pwd)) {
          errorMsg += "\n- At least one uppercase letter";
        }

        if (!/(?=.*\d)/.test(values.pwd)) {
          errorMsg += "\n- At least one digit";
        }

        if (!/(?=.*[@$!%*?&])/.test(values.pwd)) {
          errorMsg += "\n- At least one special character";
        }

        setErrorMsg(errorMsg);

        return;
      }

      if (!validatePhoneNumber(values.ph)) {
        setErrorMsg("Please enter a valid phone number");
        return;
      }
      setErrorMsg("");
      setSubmitButtonDisabled(true);

      addDoc(collection(db, "Users"), {
        name: values.name,

        email: values.email,

        Password: values.pwd,

        PhoneNumber: values.ph,
      })
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };

    const validateName = (name) => {
      const nameRegex = /^[A-Za-z\s]+$/;

      return nameRegex.test(name) && name.length >= 2;
    };

    const validateEmail = (email) => {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      return emailRegex.test(email);
    };

    const validatePassword = (password) => {
      // Regex pattern to match the password criteria
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };
    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberRegex = /^\d{10}$/;

      return phoneNumberRegex.test(phoneNumber);
    };


  return (
    <>
      <Navbar />
      <div className="lcontainer">
        <div className="innerBox">
          <h1
            className="heading"
            style={{
              color: "#00338e",
              fontFamily: "Barlow, sans-serif",
              width: "50px",
              alignSelf: "center",
              marginRight:'70px'
            }}
          >
            Signup
          </h1>
            <InputControl
              label="Name"
              type="text"
              placeholder="Enter your name"
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  name: event.target.value,
                  required: true,
                  maxLength: 10,
                }))
              }
            />
           
            <InputControl
              label="Email"
              type="email"
              placeholder="Enter email address"
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  email: event.target.value,
                  
                }))
              }
            />
            <InputControl
              label="Password"
              type="password"
              placeholder="Enter password"
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  pwd: event.target.value,

                }))
              }
            />
            <InputControl
              label="Phone number"
              type="phone"
              placeholder="Enter phone number"
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  ph: event.target.value,
                  required: true,
                  maxLength: 10,
                }))
              }
            />

            <div className="foot">
              <b className="error">{errorMsg}</b>
              <button
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                SIGNUP
              </button>
              <p Style={{ fontFamily: "Barlow, sans-serif" }}>
                Already have an account?{" "}
                <span>
                  <Link
                    Style={{ fontFamily: "Barlow, sans-serif" }}
                    to="/login"
                  >
                    <u>LOGIN</u>
                  </Link>
                </span>
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
