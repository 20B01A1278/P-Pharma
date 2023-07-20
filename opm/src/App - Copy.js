import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup.js";
import Addprod from "./Addprod" ;
import Navbar from "./Navbar";
import History from './History' ;
import Post_forms from './Post_forms'
import Update from "./Update" ;
import Cart from "./Cart";
import ViewOrders from "./ViewOrders" ;
import { auth } from "./firebase";
import PaymentForm from "./Paymentcomponents/PaymentForm";
import Main from "./Main.js";
import Payment from "./Paymentcomponents/Payment"
import "./App.css";
import Products from "./Products" ;
import Adminadd from "./Addprod" ;
import Adminlogin from './Adminlogin' ;
import Deliveryadd from './Deliveryadd' ;
import AdminMain from './AdminMain' ;
import InvoicePage from "./InvoicePage";
import Updateprofile from './Updateprofile';
// import PaymentForm from "./Paymentcomponents/PaymentForm";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="ViewOrders" element={<ViewOrders />} />
          <Route path="InvoicePage" element={<InvoicePage />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/PaymentForm" element={<PaymentForm />} />
          <Route path="/Deliveryadd" element={<Deliveryadd />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Products" element={<Products />} />
          <Route path="Main" element={<Main />} />
          <Route path="/AdminMain" element={<AdminMain />} />
          <Route path="/History" element={<History />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Addprod" element={<Addprod />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/Adminadd" element={<Addprod />} />
          <Route path="/PostForms" element={<Post_forms />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path = '/Updateprofile' element = {<Updateprofile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
