import React from 'react'
import AdminNavbar from './AdminNavbar' ;
import './AdminMain.css' ;
import { Link, useLocation } from 'react-router-dom';
import addproduct from "./addproduct.png"
import view from "./Vieeworders.png"
let AdminID="";
function AdminMain() {
    
  return (
    <>
    <AdminNavbar />
    <div class="pal">
    <div class='ui centered'>
      <div class="ui three column grid" >
        <div class="column" style={{alignContent:'center',  paddingTop:'100px'}}>
            <div class="ui fluid card"  >
            <div class="image" >
                <img src={addproduct} style={{height:'200px', width:'200px'}}/>
            </div>
            <div class="content">
                <Link to="/Addprod" class="header" style={{fontSize:'25px', textDecoration:'none' , fontFamily:"Barlow, sans-serif"}}>Add Product</Link>
            </div>
            </div>
        </div>
        <div class="column" style={{alignContent:'center', paddingTop:'100px'}}>
            <div class="ui fluid card">
            <div class="image">
                <img src="https://tse2.mm.bing.net/th?id=OIP.klSvHqXiSa219zbgV_GxwgHaHa&pid=ImgDet&w=1378&h=1378&rs=1" style={{height:'200px',width:'200px', borderRadius:'10px'}}/>
            </div>
            <div class="content">
                <Link class="header" to="/Update" style={{fontSize:'25px', textDecoration:'none',  fontFamily:"Barlow, sans-serif"}}>stock</Link>
            </div>
            </div>
        </div>
        <div class="column" style={{alignContent:'center',  paddingTop:'100px'}}>
            <div class="ui fluid card">
            <div class="image">
                <img src={view}style={{height:'210px'}}/>
            </div>
            <div class="content">
                <Link class="header" to="/ViewOrders" style={{fontSize:'20px',  textDecoration:'none', fontFamily:"Barlow, sans-serif"}}>View orders</Link>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  );
}
export {AdminID} ;
export default AdminMain ;
