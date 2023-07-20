// import React, { useState,useEffect } from "react";
// import { Button,Card } from 'react-bootstrap';
// import { collection,getDocs,doc, getDoc, addDoc } from "firebase/firestore";
// import "./Products.css";
// import {BsCart4,BsCheckLg} from "react-icons/bs";
// import db from "./firebase";
// import swal from 'sweetalert' ;
// import {userid,cartProds} from "./Main";
// import Cards from "./Card.js" ;
// import 'reactjs-popup/dist/index.css';
// import { useNavigate } from "react-router-dom";
// import "./Card.css";
// import "./flip-transition.css";
// import { CSSTransition } from "react-transition-group";
// import "./flippable-card.css";


// let finalData = [];
// let text="";
// let totalCost = 0;
// var cartProducts = [];
// function Dashboard(){
//     const navigate=useNavigate();
//     const [drugs,setDrugs]=useState([{}]);
//     const [cart,setCart] = useState(cartProds);
//     const [showFront, setShowFront] = useState(true);

//     useEffect(()=>{
//         cartProducts = cart;
//     })
//     const Medications = (DB) => async (e) =>{
//         e.preventDefault();
//         if(userid == null){
//             swal("In order to shop you need to register/login first");
//             navigate("/Signup");
//         }
//         let products = [];
//         const collectionProducts = collection(db,DB);
//         const value = await getDocs(collectionProducts);
//         value.forEach((doc) => products.push({ ...doc.data(),"DBname":DB}));
//         if(DB === "HealthCare"){
//             text = "Shop for Health care Medications here"
//         }
//         else if(DB === "SkinCare"){
//             text = "Shop for Skin care Medications here";
//         }
//         else if(DB === "BabyCare"){
//             text = "Shop for Baby care Medications here";
//         }
//         else if(DB === "CovidCare"){
//             text = "Shop for Covid care Medications here";
//         }
//         setDrugs(products);
//         finalData = products;
        // console.log(drugs);
    // }
    // const AddedToCart = (refID,dbname) => async(e) =>{
        // console.log(cartProducts);
        // const item = doc(db,dbname,refID);
        // const itemdoc = await getDoc(item);
        // let isPresent = false;
        // cart.forEach((innerItem)=>{
        //     if(innerItem.id === refID){
        //         isPresent = true;
        //     }
        // })
        // if(isPresent){
        //     swal("Product already Added to Cart");
        // }
        // else{
        //     cart.push({...itemdoc.data(),"dbname":dbname,"amountBought":itemdoc.data().price});
        //     setCart([...cart]);
        //     totalCost+=parseFloat(itemdoc.data().price);
        //     addDoc(collection(db,"Users",userid,"Orders"),{
        //         name:itemdoc.data().name,
        //         price:itemdoc.data().price,
        //         Image:itemdoc.data().Image,
        //         Care:dbname,
        //         Quantity:1, 
        //         amountBought:itemdoc.data().price,
        //     }).then(()=>{
                // console.log(cart);
                // swal(itemdoc.data().name+" added to cart");
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: itemdoc.data().name+" added to cart",
                //     showConfirmButton: false,
                //     timer: 1500
    //             //   })
    //         })
    //     }
    // }
    // const handleClick = (item) => {

    //     if (cart.indexOf(item) !== -1) return;
    
    //     setCart([...cart, item]);

    //   };
    // return(
    //     <div>
    //     <div className="prod.container">
    //         <div className="prodinnerBox">
    //         <h1>SHOP HERE</h1><br></br>
    //         <Button onClick={Medications("HealthCare")} alt="Health Care" style={{backgroundImage:"url('https://thevalueinitiative.org/wp-content/uploads/2021/08/value-assessment-blog_resize.jpg')"}}><p>Health Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         <Button onClick={Medications("SkinCare")} alt="Skin Care" style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.NZ-VfEFLJQTE_dnqddwjMgHaE7?pid=ImgDet&rs=1')"}}><p>Skin Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         <Button onClick={Medications("BabyCare")} alt="Baby Care" style={{backgroundImage:"url('https://p0.pikist.com/photos/236/884/baby-newborn-child-parenting-parent-mother-care-sleeping-skin.jpg')"}}><p>Baby Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         <Button onClick={Medications("CovidCare")} alt="Covid Care" style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.yBUd1gkaWvh_DHbL7gHucQHaE8?pid=ImgDet&rs=1')"}}><p>Covid Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </div>
    //     </div>
    //     <h1>{text}</h1>
    //     {/* <Card style={{display: "inline-block"}}> */}
    //         {finalData.map(val => {
                // return (
                //     <>
                //     <Cards key={doc.ref} {...val} handleClick={handleClick}/>
                    /* <Card.Body key={val.id} style={{display: "inline-block",margin:"10px"}}>
                    <div className="nextcontainer">
                    <Card.Img src={val.Image} style={{height:"200px", width:"250px",padding:"10px"}} className='img-fluid rounded'></Card.Img>
                    <Card.Title style={{fontWeight:"bolder"}}>{val.name} {val.Dosage}</Card.Title>
                    <Card.Text>{val.company}</Card.Text>
                    <hr style={{border:"1px solid green"}}></hr>
                    <Card.Text style={{fontWeight:"bold"}}>Price: {val.price}/-</Card.Text>
                    {/* <Button href="" onClick={AddedToCart(val.id,val.DBname)} style={{backgroundColor:"darkblue"}}>
                        ADD TO CART<span style={{padding:"8px"}}><BsCart4 style={{fontSize:"large"}}/></span></Button> */
                    /* <Button onClick={AddedToCart(val.id,val.DBname)} style={{backgroundColor:"darkblue"}}>ADD TO CART<span style={{padding:"8px"}}><BsCart4 style={{fontSize:"large"}}/></span></Button> */
                    /* <Popup trigger={<Button onClick={AddedToCart(val.id,val.DBname)} style={{backgroundColor:"darkblue"}}>ADD TO CART<span style={{padding:"8px"}}><BsCart4 style={{fontSize:"large"}}/></span></Button>} position="bottom center">
                    <div style={{textAlign:"center",fontSize:"15px",color:"green"}}><b>Added to cart<BsCheckLg style={{fontSize:"large"}}/></b></div>
                    </Popup> */
                    /* </div> */
                    /* // </Card.Body>  */
            //         </>
                    
            //     );
            // })}
        /* </Card> */
        /* <Cart cartProducts={cartProducts} setCart={setCart} handleChange={handleChange} /> */
        // </div>
    //     <div class="popup" onclick="myFunction()">Click me!
    //     <span class="popuptext" id="myPopup">Popup text...</span>
    //   </div>
       // <a href="#" onClick={() => { func1(); func2();}}>Test Link</a>
    //     <Popup trigger={<button> Trigger</button>} position="right center">
    //     <div>Popup content here !!</div>
    //   </Popup>
//     );
// }
// export {cartProducts,totalCost};
// export default Dashboard;


import React, { useState,useEffect } from "react";
import { Button,Card } from 'react-bootstrap';
import { collection,getDocs,doc, getDoc, addDoc } from "firebase/firestore";
import  "./Products.css";
import {BsCart4,BsInfoLg,BsPersonCircle, BsBoxArrowRight} from "react-icons/bs";
import { auth, db, logout } from "./firebase";
import {userid,cartProds} from "./Main";
import { useNavigate } from "react-router-dom";
import "./NavbarMain.css";
import swal from "sweetalert" ;
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import NavbarMain from "./NavbarMain" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoCarousel from "./Carousel";
import Cards from "./Card.js" ;
import logo from "./P-Pharmalogo.png";


let finalData = [];
let text="";
let totalCost = 0;
var cartProducts = [];
let searchData=[];
let searchText ="";

function Dashboard(){
  const [user, loading] = useAuthState(auth);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
    const [drugs,setDrugs]=useState([{}]);
    const [cart,setCart] = useState(cartProds);
    const [Data,setData] = useState('');
    const [search ,setSearch]=useState('');
    const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  const authh = !(!user);
  console.log(authh);
  console.log(1111);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/Login'; 
    navigate(path);
  }
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
    useEffect(()=>{
        cartProducts = cart;
    })
    const Medications = (DB) => async (e) =>{
        e.preventDefault();
        if(userid == null){
            swal("In order to shop you need to register/login first");
            navigate("/Signup");
        }
        let products = [];
        let stockText = "";
        const collectionProducts = collection(db,DB);
        const value = await getDocs(collectionProducts);
        value.forEach((doc) => {
            stockText = checkAvailableQuantity(doc.data().Quantity);
            products.push({ ...doc.data(),"DBname":DB,"stockText":stockText});
        });
        if(DB === "HealthCare"){
            text = "Shop for Health care Medications here"
        }
        else if(DB === "SkinCare"){
            text = "Shop for Skin care Medications here";
        }
        else if(DB === "BabyCare"){
            text = "Shop for Baby care Medications here";
        }
        else if(DB === "CovidCare"){
            text = "Shop for Covid care Medications here";
        }
        setDrugs(products);
        finalData = products;
        console.log(drugs);
    }
    const AddedToCart = (refID,dbname) => async(e) =>{
        const item = doc(db,dbname,refID);
        const itemdoc = await getDoc(item);
        if(parseInt(itemdoc.data().Quantity) == 0){
            swal("Item is not available in stock");
        }
        else{
            let isPresent = false;
            cart.forEach((innerItem)=>{
                if(innerItem.id === refID){
                    isPresent = true;
                }
            })
            if(isPresent){
                swal("Product already Added to Cart");
            }
            else{
                addDoc(collection(db,"Users",userid,"Orders"),{
                    name:itemdoc.data().name,
                    price:itemdoc.data().price,
                    Image:itemdoc.data().Image,
                    Care:dbname,
                    Quantity:itemdoc.data().Quantity,
                }).then((doc)=>{
                    cart.push({...itemdoc.data(),"dbname":dbname,"amountBought":itemdoc.data().price,"orderid":doc.id,"userQuantity":"1"});
                    setCart([...cart]);
                    totalCost+=parseFloat(itemdoc.data().price);
                    console.log(cart);
                    swal("",itemdoc.data().name+" added to cart", "success");
                });
            }
        }
    }
    const searchRecords= async (e)=>{
        e.preventDefault();
        let postData=[];
        let stockText="";
        const value1 = await getDocs(collection(db , "HealthCare"));
        value1.forEach((doc)=>{
            if((doc.data().name!==undefined && doc.data().name.toLowerCase() == search.toLowerCase()) || (doc.data().company!==undefined && doc.data().company.toLowerCase() == search.toLowerCase())){
                stockText = checkAvailableQuantity(doc.data().Quantity);
                postData.push({...doc.data(),"DBname":"HealthCare","stockText":stockText});
            }
        })
        const value2 = await getDocs(collection(db , "SkinCare"));
        value2.forEach((doc)=>{
            if((doc.data().name!==undefined && doc.data().name.toLowerCase() == search.toLowerCase()) || (doc.data().company!==undefined && doc.data().company.toLowerCase() == search.toLowerCase())){
                stockText = checkAvailableQuantity(doc.data().Quantity);
                postData.push({...doc.data(),"DBname":"SkinCare","stockText":stockText});
            }
        })
        const value3 = await getDocs(collection(db , "BabyCare"));
        value3.forEach((doc)=>{
            if((doc.data().name!==undefined && doc.data().name.toLowerCase() == search.toLowerCase()) || (doc.data().company!==undefined && doc.data().company.toLowerCase() == search.toLowerCase())){
                stockText = checkAvailableQuantity(doc.data().Quantity);
                postData.push({...doc.data(),"DBname":"BabyCare","stockText":stockText});
            }
        })
        const value4 = await getDocs(collection(db , "CovidCare"));
        value4.forEach((doc)=>{
            if((doc.data().name!==undefined && doc.data().name.toLowerCase() == search.toLowerCase()) || (doc.data().company!==undefined && doc.data().company.toLowerCase() == search.toLowerCase())){
                stockText = checkAvailableQuantity(doc.data().Quantity);
                postData.push({...doc.data(),"DBname":"CovidCare","stockText":stockText});
            }
        })
        setData(postData);
        searchData = postData;
        if(searchData.length < 1){
          searchText="No Matchings Found";
        }
        else{
        searchText = "";
        }
        if(search == ""){
          searchText="";
        }
    }
    const checkAvailableQuantity=(quantityValue)=>{
        if(parseInt(quantityValue) > 0){
            return "Available in stock";
        }
        else{
            return "Not Available in stock";
        }
    }
    const stockFunction=(stockValue)=>{
        if(stockValue === "Available in stock"){
            return <Card.Text style={{color:"green"}}>{stockValue}</Card.Text>
        }
        else{
            return <Card.Text style={{color:"red"}}>{stockValue}</Card.Text>
        }
    }
    return(
        <div>
          {/* <div className="header1">
            <Link to="/">
              <img src={logo} style={{width:"200px",height:"65px",paddingBottom:"15px"}}></img>
            </Link>
            <div class="ui secondary  menu">
              <div class="right menu">
                  <div class="item">
                  <div class="ui icon input">
                      <input type="text" placeholder="Search..." style={{borderColor:'#3f6ac8',width:"250px"}} onKeyUp={searchRecords} onChange={(e)=>setSearch(e.target.value)}/>
                      <i class="search link icon"></i>
                  </div>
                  </div>
                  <Link style={{color:'#3f6ac8', fontSize:'25px', fontWeight:'bold' }} to={{ pathname: '/Cart', userid: userid}} class="ui item">
                      Cart<span style={{padding:"5px"}}><BsCart4 style={{fontSize:"25px"}}/><sup>{cart.length}</sup></span>
                </Link>
                <Link style={{color:'#3f6ac8', fontSize:'25px', fontWeight:'bold' }} to="/account" class="ui item">
                      Account<span style={{padding:"5px"}}><BsPersonCircle style={{fontSize:"25px"}}/></span>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="Logo">
           <header1>
             <Link to="/">
               {/* <img src="https://th.bing.com/th/id/R.f7bb2ff862767f75ee715927adf1a85c?rik=PH2iR9hy4zxVbw&riu=http%3a%2f%2fmycoviddiary.org%2fwp-content%2fuploads%2f2020%2f07%2fprovidence-logo2.png&ehk=5kyYjzSqPqWkPQsqqpUkYcSQYyYbnniXkNjN4TioZvM%3d&risl=&pid=ImgRaw&r=0"></img> */}
                 <img src={logo} />           
             </Link>
            <div class="ui secondary menu">
              <div class="right menu" style={{height:'15px'}}>
                  <div class="item">
                  <div class="ui icon input">
                      <input type="text" placeholder="Search..." style={{borderColor:'#00338e',width:'400px', height:'45px', borderRadius:'25px', marginTop:'70px', fontFamily: "Barlow, sans-serif", color:"#00338e"  }} onKeyUp={searchRecords} onChange={(e)=>setSearch(e.target.value)}/>
                      <i class="search link icon" style={{marginTop:"35px"}}></i>
                  </div>
                  </div>
                  <Link style={{color:'#3f6ac8', fontSize:'22px', fontWeight:'bold', marginTop:'70px', fontFamily: "Barlow, sans-serif", color:"#00338e"  }} to={{ pathname: '/Cart', userid: userid}} class="ui item">
                      Cart<span style={{padding:'8px'}}><BsCart4 style={{fontSize:"25px"}}/><sup>{cart.length}</sup></span>
                </Link>
                 <Link style={{color:'#3f6ac8', fontSize:'22px', fontWeight:'bold',marginTop:'70px', fontFamily: "Barlow, sans-serif", color:"#00338e"   }} to={{ pathname: '/History', userid: userid}} class="ui item">
                      Account<span style={{padding:'8px'}}><BsPersonCircle style={{fontSize:"25px"}}/></span>
                </Link>
                { 
              authh ? <Link
                          to='/Login'
                          className='nav-links-mobile'
                          onClick={logout}
                        > 
                        </Link>
                      :
                          <Link
                          to='/Login'
                          className='nav-links-mobile'
                          onClick={closeMobileMenu}
                          >
                          
                          </Link>   
              }
            <ul>
            {
              authh ? 
              <Link onClick={logout} style={{color:'#3f6ac8', fontSize:'22px', fontWeight:'bold', marginTop:'15px', fontFamily: "Barlow, sans-serif", color:"#00338e"}} to="/" class="ui item">
                    LogIn<span style={{padding:'8px'}}><BsBoxArrowRight style={{fontSize:"25px"}}/></span></Link>
                    // : <Button onClick={routeChange} style={{marginTop:'20px'}}>LOG OUT</Button>
                    :<Link onClick={routeChange} style={{color:'#3f6ac8', fontSize:'20px', fontWeight:'bold',marginTop:'8px', fontFamily: "Barlow, sans-serif", color:"#00338e" }} to="/login" class="ui item">
                    Logout<span style={{padding:'8px'}}><BsBoxArrowRight style={{fontSize:"25px"}}/></span> </Link>
                    /* // authh ? <li>{ button && <Button onClick={logout} style={{color:'#3f6ac8', fontSize:'25px', fontWeight:'bold' }}>
                    // LOG OUT </Button>}</li>
                    // : <li>{ button && <Button onClick={routeChange} style={{color:'#3f6ac8', fontSize:'25px', fontWeight:'bold' }} >
                    // LOG IN </Button>}</li> */
            }
          </ul>
              </div>
              </div>
           </header1>
           </div>
      <div>
          <DemoCarousel/>
      </div>
        <h1 style={{textAlign:"left", paddingLeft:"30px"}}>{searchText}</h1>
        <div style={{alignItems:"center"}}>
        {/* <Card style={{display: "inline-block"}}> */}
            {searchData.map(val => {
                return (
                    <Cards key={doc.ref} {...val} handleClick={handleClick}/>
                    // <Card.Body key={val.id} style={{display: "inline-block",margin:"10px"}}>
                    // <div className="nextcontainer">
                    // <Card.Img src={val.Image} style={{height:"200px", width:"250px",padding:"10px"}} className='img-fluid rounded'></Card.Img>
                    // <Card.Title style={{fontWeight:"bolder"}}>{val.name} {val.Dosage}</Card.Title>
                    // <Card.Text>{val.company}</Card.Text>
                    // {stockFunction(val.stockText)}
                    // <hr style={{border:"1px solid green"}}></hr>
                    // <Card.Text style={{fontWeight:"bold"}}>Price: {val.price}/-</Card.Text>
                    // <Button style={{backgroundColor:"darkblue"}} onClick={AddedToCart(val.id,val.DBname)}>ADD TO CART<span style={{padding:"8px"}}><BsCart4 style={{fontSize:"large"}}/></span></Button>
                    // </div>
                    // </Card.Body>
                );
            })}
        {/* </Card> */}
        </div>
        <div className="prodcontainer">
            <div className="prodinnerBox">
            {/* <h1>SHOP HERE</h1><br></br> */}
            <Button onClick={Medications("HealthCare")} alt="Health Care" style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.cjI6TRCMfyRiefRsTOnCkwHaE8?pid=ImgDet&rs=1')", color:"#00338e"}}><p>Health Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={Medications("SkinCare")} alt="Skin Care" style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.NZ-VfEFLJQTE_dnqddwjMgHaE7?pid=ImgDet&rs=1')" , color:"#00338e"}}><p>Skin Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={Medications("BabyCare")} alt="Baby Care" style={{backgroundImage:"url('https://p0.pikist.com/photos/236/884/baby-newborn-child-parenting-parent-mother-care-sleeping-skin.jpg')" , color:"#00338e"}}><p>Baby Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={Medications("CovidCare")} alt="Covid Care" style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.yBUd1gkaWvh_DHbL7gHucQHaE8?pid=ImgDet&rs=1')" , color:"#00338e"}}><p>Covid Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
        {/* <h1>{text}</h1> */}
        <Card style={{display: "inline-block"}}>
            {finalData.map(val => {
                return (
                    <Cards key={doc.ref} {...val} handleClick={handleClick}/>
                    // <Card.Body key={val.id} style={{display: "inline-block",margin:"10px"}}>
                    // <div className="nextcontainer">
                    // <Card.Img src={val.Image} style={{height:"200px", width:"250px",padding:"10px"}} className='img-fluid rounded'></Card.Img>
                    // <Card.Title style={{fontWeight:"bolder"}}>{val.name} {val.Dosage}</Card.Title>
                    // <Card.Text>{val.company}</Card.Text>
                    // {stockFunction(val.stockText)}
                    // <hr style={{border:"1px solid green"}}></hr>
                    // <Card.Text style={{fontWeight:"bold"}}>Price: {val.price}/-</Card.Text>
                    // <Button onClick={AddedToCart(val.id,val.DBname)} style={{backgroundColor:"darkblue"}}>ADD TO CART<span style={{padding:"8px"}}><BsCart4 style={{fontSize:"large"}}/></span></Button>
                    // </div>
                    // </Card.Body>
                );
            })}
        </Card>
        </div>
    );
}
export {cartProducts,totalCost};
export default Dashboard;

