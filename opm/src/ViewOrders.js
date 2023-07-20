import {React,useState} from "react";
import "./ViewOrders.css";
import { collection,getDocs} from "firebase/firestore";
import { Button } from 'react-bootstrap';
import AdminNavbar from "./AdminNavbar";
import db from "./firebase";
let finalOrders = [];
function ViewOrders(){
    const [drugs,setDrugs]=useState([{}]);
    const ViewAllOrders = () => async (e) =>{
        e.preventDefault();
        let orders = [];
        const collectionorders = collection(db,"Admin","6DEz8d2wrjTIc2Rr474R","Orders");
        const value = await getDocs(collectionorders);
        value.forEach((doc) => {
            orders.push({ ...doc.data(),"docRef":doc.id});
        });
        setDrugs(orders) ;
        finalOrders = orders ;
    }
  return (
    <>
    <div><AdminNavbar/></div>
      <div className="background_imgd">
        <div className="containerd_" style={{fontFamily:"Barlow, sans-serif"}}>
          <div className="abcdefgd" >
            <Button style={{marginLeft:"200px", marginTop:"40px"}} onClick={ViewAllOrders()}><p >View Orders</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>

        </div>
          <div className="stock_containerd">
            <div className="container_tabled" style={{fontFamily:"Barlow, sans-serif"}}>
              <table class="ui celled table" style={{textAlign:"center"}}>
                <thead style={{fontSize:"20px"}}>
                  <tr>
                    <th style={{alignItems:"center"}}>ID</th>
                    <th style={{alignItems:"center"}}>Product Details</th>
                    <th style={{alignItems:"center"}}>Quantity Taken</th>
                    <th style={{alignItems:"center"}}>Amount Purchased</th>
                  </tr>
                </thead >
                <tbody style = {{fontSize:"15px"}}>
                  {finalOrders.map((val) => {
                    return (
                      <tr>
                        <td data-label="Medicine name"><b>Order ID: </b>{val.orderid}<br></br><b>Product ID: </b>{val.productid}</td>
                        <td data-label="Quantity">{val.name}<br></br>{val.company}<br></br>{val.Care}</td>
                        <td data-label="userQuantity">{val.userQuantity}</td>
                        <td data-label="amountBought">{val.amountBought}</td>
                     </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    </>
  );
}
export default ViewOrders;

