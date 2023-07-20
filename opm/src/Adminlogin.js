// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import InputControl from "./InputControl";
// import "./Login.css";
// import { query, where, collection, getDocs } from "firebase/firestore";
// import Navbar from "./Navbar";
// import db from "./firebase";
// import swal from "sweetalert";
// function Adminlogin() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = async (e) => {
//     e.preventDefault();

//     if (!values.email || !values.pass) {
//       return;
//     }

//     setSubmitButtonDisabled(true);

//     var str1 = "";

//     const collectionAdmin = collection(db, "Admin");

//     const q = query(
//       collectionAdmin,
//       where("Email", "==", values.email),
//       where("Password", "==", values.pass)
//     );

//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach((doc) => (str1 = doc.id));

//     if (querySnapshot.docs.length > 0) {
//       swal("","Welcome Admin","success");

//       navigate("/AdminMain", { state: { AdminID1: str1 } });
//     } else {
//       swal("","Sorry! Admin has only permissions to access the database","warning");

//       setSubmitButtonDisabled(false);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="lcontainer">
//         <div className="innerBox">
//           <h1 className="heading">
//             <b>Admin Login</b>
//           </h1>

//           <InputControl
//             label="Email"
//             onChange={(event) =>
//               setValues((prev) => ({ ...prev, email: event.target.value }))
//             }
//             placeholder="Enter email address"
//           />
//           <InputControl
//             label="Password"
//             type="password"
//             onChange={(event) =>
//               setValues((prev) => ({ ...prev, pass: event.target.value }))
//             }
//             placeholder="Enter Password"
//           />
//           <div className="foot" style={{backgroundColor:"#00338e"}}>
//             <button disabled={submitButtonDisabled} onClick={handleSubmission}>
//               LOGIN
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Adminlogin;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "./InputControl";
import "./Login.css";
import { query, where, collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";
import db from "./firebase";
import swal from "sweetalert";

function Adminlogin() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    pass: "",
  });

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
      pass: "",
    };

    if (!values.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!values.pass) {
      newErrors.pass = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitButtonDisabled(true);

      var str1 = "";

      const collectionAdmin = collection(db, "Admin");

      const q = query(
        collectionAdmin,
        where("Email", "==", values.email),
        where("Password", "==", values.pass)
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => (str1 = doc.id));

      if (querySnapshot.docs.length > 0) {
        swal("", "Welcome Admin", "success");

        navigate("/AdminMain", { state: { AdminID1: str1 } });
      } else {
        swal(
          "",
          "Sorry! Admin has only permissions to access the database",
          "warning"
        );

        setSubmitButtonDisabled(false);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="lcontainer">
        <div className="innerBox">
          <h1 className="heading">
            <b>Admin Login</b>
          </h1>

          <InputControl
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
            error={errors.email}
          />
          {errors.email && (
            <p className="error-message text-danger">{errors.email}</p>
          )}

          <InputControl
            label="Password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
            error={errors.pass}
          />
          {errors.pass && (
            <p className="error-message text-danger">{errors.pass}</p>
          )}

          <div className="foot" style={{ backgroundColor: "#00338e" }}>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              LOGIN
            </button>
          </div>
          
        </div>
        <div style={{color: "white"}}>
            <p>admin email: admin@gmail.com</p>
            <p>admin password: admin123</p>
          </div>
      </div>
    </div>
  );
}

export default Adminlogin;
