import React,{useEffect, useState} from 'react';
import { useNavigate,Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { cartProducts,totalCost } from "./Products";
import swal from "sweetalert" ;
import { updateDoc,doc,collection,addDoc, setDoc, getDocs, deleteDoc} from "firebase/firestore";
import {userid} from "./Main";
import db from "./firebase";
import {BsFillTrashFill,BsArrowBarRight, BsArrowLeftShort} from "react-icons/bs";
import NavbarMain from './NavbarMain';
let finalamount = 0;
let finalCart = [] ;
function Cart(){
    const navigate = useNavigate();
    var [cart,setCart] = useState(cartProducts);
    const [priceval, setPrice] = useState(0);
    const [totalPrice,setTotalPrice] = useState(totalCost);
    const handlePrice = (quantityVal,refID)=>{
        let ans = 0;
        cart.map((innerItem,index)=>{
            if(innerItem.id === refID){
                ans += parseFloat(quantityVal) * parseFloat(innerItem.price);
                cart[index].userQuantity = quantityVal;
                cart[index].amountBought = ans.toString();
            }
        });
        let totalamount = 0;
        cart.forEach((innerItem)=>{
            totalamount+=parseFloat(innerItem.amountBought);
        });
        finalamount = totalamount;
        finalCart = cart;
        setTotalPrice(totalamount);
        setPrice(ans);
        setCart(cart);
    }
    const handleRemove = (refID,itemname)=>{
        var arr = cart.filter((innerItem)=> innerItem.id !== refID)
        setCart(arr);
        swal("", itemname+" is removed from the cart", "success");
    }
    const handleclearCart = () =>{
        setCart([]);
        swal("Your cart is cleared");
    }
    useEffect(()=>{
        handlePrice();
       
    })
    const handleOrderUpdates=async()=>{
        console.log(cart);
        cart.forEach((innerItem)=>{
            setDoc(doc(db,"Admin","6DEz8d2wrjTIc2Rr474R","Orders",innerItem.orderid),{
                name:innerItem.name,
                company:(innerItem.company===undefined)?"":innerItem.company,
                Dosage:(innerItem.Dosage===undefined)?"0":innerItem.Dosage,
                price:innerItem.price,
                Image:innerItem.Image,
                Care:innerItem.Care,
                Quantity:innerItem.Quantity,
                userQuantity:innerItem.userQuantity,
                amountBought:innerItem.amountBought,
                productid: innerItem.id,
                orderid:innerItem.orderid
            })
        })
        cart.forEach((innerItem)=>{
            setDoc(doc(db, "Users", userid, "Orders", innerItem.orderid),{
                name:innerItem.name,
                company:(innerItem.company===undefined)?"":innerItem.company,
                Dosage:(innerItem.Dosage===undefined)?"0":innerItem.Dosage,
                price:innerItem.price,
                Image:innerItem.Image,
                Care:innerItem.Care,
                Quantity:innerItem.Quantity,
                userQuantity: innerItem.userQuantity,
                amountBought: innerItem.amountBought,
                productid: innerItem.id,
                orderid:innerItem.orderid
            })
        })
        //Updating Quantity of the products after checkout
        cart.forEach((innerItem)=>{
            const postRef = doc(db,innerItem.Care,innerItem.id);
            updateDoc(postRef, {
                    Quantity:(parseInt(innerItem.Quantity)-parseInt(innerItem.userQuantity)).toString(),
            });
        })
        const logoutCart = collection(db,"Users",userid,"LogoutCart");
        const querySnapshot = await getDocs(logoutCart);
        querySnapshot.forEach((innerItem)=> {
            deleteDoc(doc(db,"Users",userid,"LogoutCart",innerItem.id));
        });
    }
    const LogoutHandle=async()=>{
        if(cart.length > 0){
            console.log(cart);
            cart.forEach((innerItem)=>{
                setDoc(doc(db, "Users", userid, "LogoutCart",innerItem.orderid),{
                    name:innerItem.name,
                    company:(innerItem.company===undefined)?"":innerItem.company,
                    Dosage:(innerItem.Dosage===undefined)?"0":innerItem.Dosage,
                    price:innerItem.price,
                    Image:innerItem.Image,
                    Care:innerItem.Care,
                    Quantity:innerItem.Quantity,
                    userQuantity:innerItem.userQuantity,
                    amountBought:innerItem.amountBought,
                    id: innerItem.id,
                    orderid:innerItem.orderid
                })
            })
            swal("You are logged out");
            navigate("/");
        }
    }
    const QuantitySelect=(Quantity) =>{
        let options=[];
        for(let i = 1 ; i <= Quantity;i++){
            options.push(<option style={{padding: "5px 5px",fontWeight: "bold"}}  value={i.toString()} key={i}>{i}</option>);
        }
        return options;
    }
  return (
        <>
         <NavbarMain />
        <article style={{alignItems:"left",padding:"100px"}}>
        {/* <Button style={{backgroundColor: "darkblue",color: "white",borderRadius: "5px",alignItems:"center",
borderColor: "rgb(241, 98, 98)",width: "100px",height: "50px",marginLeft:"80px"}} onClick={(e) => LogoutHandle()}><b>LOGOUT</b></Button><br></br><br></br> */}
            <table style={{alignItems: "center",width: "100%"}}>
            <tbody style={{objectFit: "contain",overflow: "hidden"}}>
            {cart.map((val) => {
return (
    <tr style={{display: "flex",alignItems: "center",justifyContent: "space-between",marginTop: "20px",
    borderBottom: "2px solid darkblue",paddingBottom:"5px",width:"100%",paddingLeft:"50px"}} key={val.id}>
    <td style={{rowspan:"2",width:"30%"}}>
        <img src={val.Image} style={{width: "200px",height: "150px"}}/>
    </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <td style={{lineHeight: "3mm",fontWeight: "500",color: "rgb(176, 176, 172)",rowspan:"2",width:"25%"}}>
        <p style={{fontWeight:'500', color:'#2d2d3f',fontSize:'20px'}}><b>{val.name}</b></p>
        <p style={{fontSize:'17px'}}>{val.company} {val.Dosage}</p>
        <p style={{color:'black'}}> MRP : {val.price}/-</p>
        <p style={{fontSize:'15px'}}> Deliver by Tomorrow</p>
    </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <td style={{padding: "2px 2px",fontWeight: "bold",letterSpacing:"2px",border:"none",
    outline: "none",color: "white",backgroundColor:"black",borderRadius: "5px",cursor: "pointer",rowspan:"2",width:"10%"}}>
    <select style={{width:"70px",height:"25px", backgroundColor:"#fff"}} onClick={(e) => handlePrice(e.target.value,val.id,val.orderid)}>
        {QuantitySelect(parseInt(val.Quantity))}
    </select>
    </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <td style={{backgroundColor: "rgb(25, 186, 25)",fontSize: "large",borderRadius: "5px",
    width:"100px",height:"40px",textAlign: "center",color: "aliceblue",paddingTop:"5px",rowspan:"2",width:"15%"}}>
        <p>{val.amountBought}/-</p>
    </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <td style={{marginRight: "100px",rowspan:"2",width:"20%"}}>
    <Button style={{backgroundColor: "red",color: "white",borderRadius: "5px",
    borderColor: "rgb(241, 98, 98)",width: "80px",height: "40px"}} onClick={(e) => handleRemove(val.id,val.name)}><span style={{padding:"8px"}}>
        <BsFillTrashFill style={{fontSize:"large"}}/></span></Button>
    </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </tr>
);
})}

            </tbody>
        </table>
        <div style={{justifyContent: "space-between",paddingTop:"20px",paddingLeft:"230px"}}>
            <span style={{fontSize: "2rem",color: "darkblue",fontWeight: "bold",letterSpacing: "2px"}}>Subtotal</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{fontSize: "2rem",color:"green",fontWeight: "bold"}}>Rs.{totalPrice}/-</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div style={{display:"inline-flex"}}>
        <Button style={{backgroundColor: "red",color: "white",borderRadius: "5px",
        borderColor: "rgb(241, 98, 98)",width: "200px",height: "50px"}} onClick={(e) => handleclearCart()}><b>CLEAR CART</b></Button>
        <Link to="/Deliveryadd">
        <Button style={{backgroundColor: "darkblue",color: "white",borderRadius: "5px",alignItems:"center",
        borderColor: "rgb(241, 98, 98)",width: "200px",height: "50px",marginLeft:"230px"}} onClick={(e) => handleOrderUpdates()}><b>CHECK OUT<span style={{paddingLeft:"10px"}}><BsArrowBarRight style={{fontSize:"large"}}/></span></b></Button>
        </Link>
        <Button style={{backgroundColor: "darkblue",color: "white",borderRadius: "5px",alignItems:"center",
        borderColor: "rgb(241, 98, 98)",width: "200px",height: "50px",marginLeft:"230px"}} onClick={(e)=> {navigate("/Main",{state:{userid1:userid,cartProducts:cart}});}}>
            <b><span><BsArrowLeftShort style={{fontSize:"25px"}}/></span>CONTINUE SHOPPING</b></Button>
        </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
        </article>
    </>
  )}

export default Cart;
export {finalCart, finalamount};

