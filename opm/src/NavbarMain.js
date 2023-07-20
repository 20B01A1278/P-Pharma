// import styles from "./NavbarMain.css";
// import { auth, logout } from "./firebase";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getDocs } from "firebase/firestore";
// import logo from "./P-Pharmalogo.png" ;
// import {BsCart4} from "react-icons/bs";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Card } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import DemoCarousel from "./Carousel";

// let finalData=[];
// let text ="";
// function NavbarMain() {
// const navigate = useNavigate();
// const [Data,setData] = useState('');
// const [search ,setSearch]=useState('');
// const [user, loading] = useAuthState(auth);
// const [click, setClick] = useState(false);
// const [button, setButton] = useState(true);
// const closeMobileMenu = () => setClick(false);
// const authh = !(!user);
// console.log(authh);
// console.log(1111);
// let navigate = useNavigate();
// const routeChange = () =>{
//   let path = '/Login';
//   navigate(path);
// }
// const showButton = () => {
//   if (window.innerWidth <= 960) {
//     setButton(false);
//   } else {
//     setButton(true);
//   }
// };

// useEffect(() => {
//   showButton();
// }, []);

//   window.addEventListener('resize', showButton);

//   const searchRecords= async (e)=>{
//       e.preventDefault();
//       let postData=[];
//       const value1 = await getDocs(collection(db , "HealthCare"));
//       value1.forEach((doc)=>{
//           if(doc.data().name.toLowerCase() == search.toLowerCase()){
//             postData.push({...doc.data()});
//           }
//       })
//       const value2 = await getDocs(collection(db , "SkinCare"));
//       value2.forEach((doc)=>{
//           if(doc.data().name.toLowerCase() == search.toLowerCase()){
//             postData.push({...doc.data()});
//           }
//       })
//       const value3 = await getDocs(collection(db , "BabyCare"));
//       value3.forEach((doc)=>{
//           if(doc.data().name.toLowerCase() == search.toLowerCase()){
//             postData.push({...doc.data()});
//           }
//       })
//       const value4 = await getDocs(collection(db , "CovidCare"));
//       value4.forEach((doc)=>{
//           if(doc.data().name.toLowerCase() == search.toLowerCase()){
//             postData.push({...doc.data()});
//           }
//       })
//       console.log(postData);
//       setData(postData);
//       finalData = postData;
//       if(finalData.length < 1){
//         text="No Matchings Found";
//       }
//       else{
//       text = "your search results";
//       }
//       //navigate("/DemoCarousel",postData);
//   }
//   return (
//     <div>
//       <div className="Logo">
//           <header1>
//             <Link to="/">
//               {/* <img src="https://th.bing.com/th/id/R.f7bb2ff862767f75ee715927adf1a85c?rik=PH2iR9hy4zxVbw&riu=http%3a%2f%2fmycoviddiary.org%2fwp-content%2fuploads%2f2020%2f07%2fprovidence-logo2.png&ehk=5kyYjzSqPqWkPQsqqpUkYcSQYyYbnniXkNjN4TioZvM%3d&risl=&pid=ImgRaw&r=0"></img> */}
//                 <img src={logo} />
//             </Link>
//             <div class="ui secondary  menu">
//               <div class="right menu">
//                   <div class="item">
//                   <div class="ui icon input">
//                       <input type="text" placeholder="Search..." style={{borderColor:'#3f6ac8',width:'400px', height:'45px', borderRadius:'25px' }} onKeyUp={searchRecords} onChange={(e)=>setSearch(e.target.value)}/>
//                       <i class="search link icon"></i>
//                   </div>
//                   </div>
//                   <Link to ="/Cart">
//                   <button style={{color:'#3f6ac8', fontSize:'25px', fontWeight:'bold' }} href="/Cart" class="ui item">
//                   Cart
//                   </button>
//                   </Link>
//                   {/* <span>
//                     <i className="fas fa-cart-plus"></i>
//                   </span> */}
//                   {/* <i class="shopping cart icon"></i> */}
//                   {/* <a style={{color:'#3f6ac8', fontSize:'25px', fontWeight:'bold'}} href="/account" class="ui large item"> */}
//                   {/* Logout */}
//                   {/* </a> */}
//                   {/* <i style={{display:'inline-block'}} class="user icon"></i> */}

//           {
//               authh ? <li><Link
//                           to='/Home'
//                           className='nav-links-mobile'
//                           onClick={logout}
//                         >

//                         </Link>

//                       </li>
//                       :
//                         <li>
//                           <Link
//                           to='/Login'
//                           className='nav-links-mobile'
//                           onClick={closeMobileMenu}
//                           >

//                           </Link>

//                         </li>
//               }
//             <ul>
//             {
//               authh ? <li>{ <Button onClick={logout} style={{textColor:"#3f6ac8"}}>LOG OUT</Button>}</li>
//                     : <li>{ <Button onClick={routeChange} style={{textColor:"#3f6ac8"}}>LOG IN</Button>}</li>
//             }
//           </ul>
//           </div>
//             </div>
//           </header1>
//       </div>
//       <br></br>
//       <div>
//           <DemoCarousel/>
//       </div><br></br>
//         <h1 style={{textAlign:"left", paddingLeft:"30px"}}>{text}</h1>
//         <Card style={{display: "inline-block"}}>
//             {finalData.map(val => {
//                 return (
//                     <Card.Body key={val.id} style={{display: "inline-block",margin:"10px"}}>
//                     <div className={styles.nextcontainer}>
//                     <Card.Img src={val.Image} style={{height:"200px", width:"250px",padding:"10px"}} className='img-fluid rounded'></Card.Img>
//                     <Card.Title style={{fontWeight:"bolder"}}>{val.name} {val.Dosage}</Card.Title>
//                     <Card.Text>{val.company}</Card.Text>
//                     <hr style={{border:"1px solid green"}}></hr>
//                     <Card.Text style={{fontWeight:"bold"}}>Price: {val.price}/-</Card.Text>
//                     <Button style={{backgroundColor:"darkblue"}}>ADD TO CART<span style={{padding:"8px"}}><BsCart4 style={{fontSize:"large"}}/></span></Button>
//                     </div>
//                     </Card.Body>
//                 );
//             })}
//         </Card>
//       </div>
//   );
//   }
// export default NavbarMain;

import "./NavbarMain.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
// import {useForm} from "react-hook-form" ;
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, NavDropdown, NavItem, Nav } from "react-bootstrap";
import logo from "./P-Pharmalogo.png";
import {
  BsCart4,
  BsPersonCircle,
  BsCart3,
  BsBoxArrowRight,
  BsArrowRightSquareFill,
} from "react-icons/bs";

import { useAuthState } from "react-firebase-hooks/auth";
import DemoCarousel from "./Carousel";
import { userid, cartProds } from "./Main";
let finalData = [];
let text = "";
function NavbarMain() {
  const [Data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [user, loading] = useAuthState(auth);
  const [click, setClick] = useState(false);
  const [cart, setCart] = useState(cartProds);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  const authh = !!user;
  console.log(authh);
  console.log(1111);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Login";
    navigate(path);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  const searchRecords = async (e) => {
    e.preventDefault();
    let postData = [];
    const value1 = await getDocs(collection(db, "HealthCare"));
    value1.forEach((doc) => {
      if (
        doc.data().name.toLowerCase() == search.toLowerCase() ||
        doc.data().company.toLowerCase() == search.toLowerCase()
      ) {
        postData.push({ ...doc.data() });
      }
    });
    const value2 = await getDocs(collection(db, "SkinCare"));
    value2.forEach((doc) => {
      if (
        doc.data().name.toLowerCase() == search.toLowerCase() ||
        doc.data().company.toLowerCase() == search.toLowerCase()
      ) {
        postData.push({ ...doc.data() });
      }
    });
    const value3 = await getDocs(collection(db, "BabyCare"));
    value3.forEach((doc) => {
      if (
        doc.data().name.toLowerCase() == search.toLowerCase() ||
        doc.data().company.toLowerCase() == search.toLowerCase()
      ) {
        postData.push({ ...doc.data() });
      }
    });
    const value4 = await getDocs(collection(db, "CovidCare"));
    value4.forEach((doc) => {
      if (
        doc.data().name.toLowerCase() == search.toLowerCase() ||
        doc.data().company.toLowerCase() == search.toLowerCase()
      ) {
        postData.push({ ...doc.data() });
      }
    });
    console.log(postData);
    setData(postData);
    finalData = postData;
    if (finalData.length < 1) {
      text = "No Matchings Found";
    } else {
      text = "your search results";
    }
    if (search == "") {
      text = "";
    }
  };

  const LogoutHandle = async () => {
    if (cart.length > 0) {
      console.log(cart);

      cart.forEach((innerItem) => {
        setDoc(doc(db, "Users", userid, "LogoutCart", innerItem.orderid), {
          name: innerItem.name,

          company: innerItem.company === undefined ? "" : innerItem.company,

          Dosage: innerItem.Dosage === undefined ? "0" : innerItem.Dosage,

          price: innerItem.price,

          Image: innerItem.Image,

          Care: innerItem.Care,

          Quantity: innerItem.Quantity,

          userQuantity: innerItem.userQuantity,

          amountBought: innerItem.amountBought,

          id: innerItem.id,

          orderid: innerItem.orderid,
        });
      });

      // alert("You are logged out");
      navigate("/login");
    }
  };
  return (
    <div>
      <div>
        <div className="Logo">
          <header1>
            <Link to="/">
              {/* <img src="https://th.bing.com/th/id/R.f7bb2ff862767f75ee715927adf1a85c?rik=PH2iR9hy4zxVbw&riu=http%3a%2f%2fmycoviddiary.org%2fwp-content%2fuploads%2f2020%2f07%2fprovidence-logo2.png&ehk=5kyYjzSqPqWkPQsqqpUkYcSQYyYbnniXkNjN4TioZvM%3d&risl=&pid=ImgRaw&r=0"></img> */}
              <img src={logo} />
            </Link>
            <div class="ui secondary menu" >
              <div class="right menu" style={{ height: "15px" }}>
                <div class="item">
                  <div class="ui icon input">
                  </div>
                </div>
                <Link
                  style={{
                    color: "#3f6ac8",
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginTop: "70px",
                    fontFamily: "Barlow, sans-serif",
                    color: "#00338e",
                  }}
                  to={{ pathname: "/Cart", userid: userid }}
                  class="ui item"
                >
                  Cart
                  <span style={{ padding: "8px" }}>
                    <BsCart4 style={{ fontSize: "25px" }} />
                    <sup>{cart.length}</sup>
                  </span>
                </Link>
                <Link
                  style={{
                    color: "#3f6ac8",
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginTop: "70px",
                    fontFamily: "Barlow, sans-serif",
                    color: "#00338e",
                  }}
                  to={{ pathname: "/History", userid: userid }}
                  class="ui item"
                >
                  Account
                  <span style={{ padding: "8px" }}>
                    <BsPersonCircle style={{ fontSize: "25px" }} />
                  </span>
                </Link>

                {authh ? (
                  <Link
                    to="/Login"
                    className="nav-links-mobile"
                    onClick={logout}
                  ></Link>
                ) : (
                  <Link
                    to="/Login"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  ></Link>
                )}
                <ul>
                  {
                    authh ? (
                      // <a style={{color:'#3f6ac8', fontSize:'25px', fontWeight:'bold',marginTop:"25px",paddingRight:"15px"}} onClick={(e) => LogoutHandle()}><b>Logout</b></a>
                      <Link
                        onClick={logout}
                        style={{
                          color: "#3f6ac8",
                          fontSize: "22px",
                          fontWeight: "bold",
                          marginTop: "15px",
                          fontFamily: "Barlow, sans-serif",
                          color: "#00338e",
                        }}
                        to="/login"
                        class="ui item"
                      >
                        LogIn
                        <span style={{ padding: "8px" }}>
                          <BsBoxArrowRight style={{ fontSize: "25px" }} />
                        </span>
                      </Link>
                    ) : (
                      // : <Button onClick={routeChange} style={{marginTop:'20px'}}>LOG OUT</Button>
                      <a
                        onClick={(e) => LogoutHandle()}
                        style={{
                          color: "#3f6ac8",
                          fontSize: "20px",
                          fontWeight: "bold",
                          marginTop: "8px",
                          fontFamily: "Barlow, sans-serif",
                          color: "#00338e",
                        }}
                        href="/login"
                        class="ui item"
                      >
                        Logout
                        <span style={{ padding: "8px" }}>
                          <BsBoxArrowRight style={{ fontSize: "25px" }} />
                        </span>{" "}
                      </a>
                    )
                  }
                </ul>
              </div>
            </div>
          </header1>
        </div>
        <br></br>
        <div>{/* <DemoCarousel/> */}</div>
        <h1 style={{ textAlign: "left", paddingLeft: "30px" }}>{text}</h1>
        <Card style={{ display: "inline-block" }}>
          {finalData.map((val) => {
            return (
              <Card.Body
                key={val.id}
                style={{ display: "inline-block", margin: "10px" }}
              >
                <div className="nextcontainer">
                  <Card.Img
                    src={val.Image}
                    style={{ height: "200px", width: "250px", padding: "10px" }}
                    className="img-fluid rounded"
                  ></Card.Img>
                  <Card.Title style={{ fontWeight: "bolder" }}>
                    {val.name} {val.Dosage}
                  </Card.Title>
                  <Card.Text>{val.company}</Card.Text>
                  <hr style={{ border: "1px solid green" }}></hr>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    Price: {val.price}/-
                  </Card.Text>
                  <Button style={{ backgroundColor: "darkblue" }}>
                    ADD TO CART
                    <span style={{ padding: "8px" }}>
                      <BsCart4 style={{ fontSize: "large" }} />
                    </span>
                  </Button>
                </div>
              </Card.Body>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
export default NavbarMain;
