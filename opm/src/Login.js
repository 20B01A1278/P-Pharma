// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import InputControl from "./InputControl";
// import GoogleButton from "react-google-button";
// import { auth } from "./firebase";
// import "./Login.css";
// import Navbar from './Navbar' ;
// import swal from 'sweetalert';
// function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");
//     setSubmitButtonDisabled(true);
//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         swal("Welcome User!", "You're logged in", "success");
//         navigate("/Main");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         // setErrorMsg(err.message);
//         swal("Sorry!", "Check your credentials!", "error");
//       });
//       // navigate("/Main");
//   };
//   return (
//     <div>
//       <Navbar />
//     <div className='lcontainer'>
//       <div className='innerBox'>
//         <h1 className='heading'><b>Login</b></h1>

//         <InputControl
//           label="Email" type="email"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//           placeholder="Enter email address"
//         />
//         <InputControl
//           label="Password" type="password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//           }
//           placeholder="Enter Password"
//         />

//         <div className='foot'>
//           <b className='error'>{errorMsg}</b>
//           <button disabled={submitButtonDisabled} onClick={handleSubmission}>
//             LOGIN
//           </button>
//           <p >
//           {/* <ForgotPassword /> */}
//             New User?{" "}
//             <span>
//               <Link to="/signup"><u>SIGNUP</u></Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore"; 
import InputControl from "./InputControl";
import db from "./firebase"
import Navbar from "./Navbar";
import swal from 'sweetalert' ;
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = async(e) => {
    e.preventDefault();
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    if (!validateEmail(values.email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    }
    setErrorMsg("");
    let str1="";
    setSubmitButtonDisabled(true);
    const collectionAdmin = collection(db,"Users");
    const q = query(collectionAdmin, where("email", "==", values.email),where("Password","==",values.pass));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => str1 = doc.id);
    if(querySnapshot.docs.length > 0){
      var cartLogoutProducts = [];
      const logoutCart = collection(db,"Users",str1,"LogoutCart");
      const logoutCartData = await getDocs(logoutCart);
      logoutCartData.forEach((doc)=> {
          cartLogoutProducts.push({...doc.data()})
      });
      navigate("/Main",{state:{userid1:str1,cartProducts:cartLogoutProducts}});
    }
    else{
      swal("", "Sorry Inorder to access Main Page you need to register first", "warning");
      navigate("/Signup");
      setSubmitButtonDisabled(false);
    }
};
const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return emailRegex.test(email);
};
  return (
    <>
    <Navbar />
    <div className="lcontainer">
      <div className="innerBox">
        <h1 style={{color: "#00338e", fontFamily:"Barlow, sans-serif"}} className="heading">Login</h1>
        <InputControl
          label="Email"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />
        <div className="foot">
          <b className="error">{errorMsg}</b>
          <button Style={{fontFamily: "Barlow, sans-serif"}} disabled={submitButtonDisabled} onClick={handleSubmission}>
            LOGIN
          </button>
          <p Style={{fontFamily: "Barlow, sans-serif"}}>         
            New User?{" "}
            <span>
              <Link Style={{fontFamily: "Barlow, sans-serif"}}to="/signup"><u>SIGNUP</u></Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
   
  );
}
export default Login;

