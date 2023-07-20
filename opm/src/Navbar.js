import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap" ;
import pharma from "./P-Pharmalogo.png" ;
// import Home from "../components/Home.js";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div class="providence">
        <Link to="/">
          {/* <img src="https://th.bing.com/th/id/R.f7bb2ff862767f75ee715927adf1a85c?rik=PH2iR9hy4zxVbw&riu=http%3a%2f%2fmycoviddiary.org%2fwp-content%2fuploads%2f2020%2f07%2fprovidence-logo2.png&ehk=5kyYjzSqPqWkPQsqqpUkYcSQYyYbnniXkNjN4TioZvM%3d&risl=&pid=ImgRaw&r=0"></img> */}
            <img src={pharma} />       
        </Link>
      </div>
      <nav ref={navRef}>
        <a style={{color: "#00338e"}} href="/">Home</a>
        <a style={{color: "#00338e"}} href="/Adminlogin">Admin</a>
        <a style={{color: "#00338e"}} href="/SignUp">Signup/Login</a>
      </nav>
    </header>
  );
}
export default Navbar ;

