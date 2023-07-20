// import React from 'react';
// import NavbarMain from './NavbarMain.js' ;
// import Products from './Procuts' ;
// import Footer from './footer' ;
// import Carousel from './Carousel' ;
// import { auth, db, logout } from "./firebase";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// // import db from "./firebase";
// import { collection,getDocs } from "firebase/firestore";
// let finalData=[];
// let text ="";
// function Home() {
//   const [Data,setData] = useState('');
//   const [search ,setSearch]=useState('');
//   const [user, loading] = useAuthState(auth);
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);
//   const closeMobileMenu = () => setClick(false);
//   const authh = !(!user);
//   console.log(authh);
//   console.log(1111);
//   let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     let path = '/Login'; 
//     navigate(path);
//   }
//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);
//     const searchRecords= async (e)=>{
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
//       <NavbarMain />
//       {/* <Carousel /> */}
//       {/* <input type="text" placeholder='Search...' style={{width:'1000px', height:'50px', borderRadius:'25px'}} /> 
//       <div class="ui icon input">
//         <input type="text" placeholder="Search..." style={{borderColor:'#3f6ac8', width:'700px', height:'50px', borderRadius:'25px'}} onKeyUp={searchRecords} onChange={(e)=>setSearch(e.target.value)}/>
//         <i class="search link icon"></i>
//       </div> */}
//       <Products />
//     <Footer/>
//     </div>
//   );
// }
// export default Home;



import React from 'react'
import NavbarMain from './NavbarMain' ;
import Dashboard from './Products';
import Footer from "./footer";
import Carousel from './Carousel' ;
import { useLocation } from 'react-router-dom';
let userid="";
var cartProds=[];
function Main() {
  const location = useLocation();
  userid = location.state.userid1;
  cartProds = location.state.cartProducts;
  console.log(userid);
  console.log(cartProds);
  return (
    <>
    {/* <NavbarMain /> */}
    {/* <Carousel /> */}
    <Dashboard />
    <Footer/>
    </>
  )
}
export {userid,cartProds};
export default Main;

