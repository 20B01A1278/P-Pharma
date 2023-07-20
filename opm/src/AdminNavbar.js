// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./AdminNavbar.css" ;
// function AdminNavbar() {
//     const navRef = useRef();
  
//     const showNavbar = () => {
//       navRef.current.classList.toggle("responsive_nav");
//     };
//     return (
//       <div class="Nava">
//         <div class="provid" >
//           <Link to="/">
//             <img src="https://th.bing.com/th/id/R.f7bb2ff862767f75ee715927adf1a85c?rik=PH2iR9hy4zxVbw&riu=http%3a%2f%2fmycoviddiary.org%2fwp-content%2fuploads%2f2020%2f07%2fprovidence-logo2.png&ehk=5kyYjzSqPqWkPQsqqpUkYcSQYyYbnniXkNjN4TioZvM%3d&risl=&pid=ImgRaw&r=0" style={{width:'80%'}}></img>
//           </Link>
//         </div>
//         <nav ref={navRef}>
//           <a href="/">Home</a>
//           <a href="/">Logout</a>
//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <FaTimes />
//           </button>
//         </nav>
//         <button className="nav-btn" onClick={showNavbar}>
//           <FaBars />
//         </button>
//       </div>
//     );
//   }
// export default AdminNavbar ;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./P-Pharmalogo.png"
import "./AdminNavbar.css";
function AdminNavbar() {
    const navRef = useRef();
  
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };
    return (
      <header>
        <div class="provid" >
          <Link to="/">
            {/* <img src="https://th.bing.com/th/id/R.f7bb2ff862767f75ee715927adf1a85c?rik=PH2iR9hy4zxVbw&riu=http%3a%2f%2fmycoviddiary.org%2fwp-content%2fuploads%2f2020%2f07%2fprovidence-logo2.png&ehk=5kyYjzSqPqWkPQsqqpUkYcSQYyYbnniXkNjN4TioZvM%3d&risl=&pid=ImgRaw&r=0" style={{width:'80%'}}></img> */}
            <img src={logo} />
          </Link>
        </div>
        <nav ref={navRef}>
          <a href="/AdminMain" style={{color:"#00338e", fontFamily:"Barlow, sans-serif"}}>Home</a>
          <a href="/Adminlogin" style={{color:"#00338e", fontFamily:"Barlow, sans-serif"}}>Logout</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
  }
export default AdminNavbar ;

  