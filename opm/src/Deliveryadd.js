import React from "react";
import { useEffect, useState } from "react";
import cart from "./Cart.js";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { db } from "./firebase.js";
// import {setPrice, setCart} from './Cart.js' ;
import StripeContainer from "./Paymentcomponents/StripeContainer";
import "./Paymentcomponents/Payment.css";
import { Link, useNavigate } from "react-router-dom";
import "./Deliveryadd.css";
import { finalCart, finalamount } from "./Cart.js";
import Footer from "./footer";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import {userid} from "./Main";
import NavbarMain from "./NavbarMain.js";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import Navbar from "./Navbar";
import { cartProducts, totalCost } from "./Products.js";
import { BsAlignMiddle } from "react-icons/bs";
export default function Order() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    ph: "",
    pwd: "",
    Docid: "",
  });
  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
  };
  console.log(userid);
  const [errorMsg, setErrorMsg] = useState("");
  const [totalPrice, setTotalPrice] = useState(totalCost);
  var [cart, setCart] = useState(cartProducts);
  const [showItem, setShowItem] = useState(false);
  const [priceval, setPrice] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return (
        <div
          className="text-danger"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          {errors[fieldName]}
        </div>
      );
    }
    return null;
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }

    if (formData.companyName.trim() === "") {
      newErrors.companyName = "Company name is required";
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform submission or other actions
      const id1 = doc(collection(db, "Users", userid, "Address")).id;
      setDoc(doc(db, "Users", userid, "Address",id1), {
        formData,
      })
        .then(() => {
          swal("", "Address added!", "success");
          // navigate("/Payment")
          const summarySection = document.getElementById("summary-section");
          summarySection.scrollIntoView({ behavior: "smooth" });
        })
        .catch((error) => {
          swal("", "Error submitting form. Please try again.", "error");
        });
    }
  };
  const handlePrice = (quantityVal, refID) => {
    let ans = 0;
    cart.map((innerItem, index) => {
      if (innerItem.id === refID) {
        ans += parseFloat(quantityVal) * parseFloat(innerItem.price);
        cart[index].amountBought = ans.toString();
        console.log(cart[index].amountBought);
      }
    });
    let totalamount = 0;
    cart.forEach((innerItem) => {
      totalamount += parseFloat(innerItem.amountBought);
    });
    setTotalPrice(totalamount);
    setPrice(ans);
    setCart(cart);
  };
  return (
    <>
      <NavbarMain />
      <div className="dcontainer">
        <h1 style={{ color: "white", fontSize: "30px" }}>
          Elevate Your well being with our supplements
        </h1>
        <div
          className="mx-auto mt-5"
          style={{ maxWidth: "1300px", alignItems: "center" }}
        >
          <MDBRow>
            <MDBCol md="8" className="mb-4" style={{ paddingLeft: "200px" }}>
              <MDBCard className="mb-4" style={{ width: "900px" }}>
                <MDBCardHeader className="py-3">
                  <MDBTypography
                    tag="h5"
                    className="mb-0"
                    style={{ color: "#3f6ac8", fontSize: "50px" }}
                  >
                    Billing details
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <form style={{ fontSize: "17px" }}>
                    <MDBRow className="mb-4">
                      <MDBCol>
                        <MDBInput
                          label="First name"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          errorMessage={errors.firstName}
                        />
                        {renderErrorMessage("firstName")}
                      </MDBCol>
                      <MDBCol>
                        <MDBInput
                          label="Last name"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          errorMessage={errors.lastName}
                        />
                        {renderErrorMessage("lastName")}
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      label="Company name"
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      errorMessage={errors.companyName}
                      className="mb-4"
                    />
                    {renderErrorMessage("companyName")}
                    <MDBInput
                      label="Address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      errorMessage={errors.address}
                      className="mb-4"
                    />
                    {renderErrorMessage("address")}
                    <MDBInput
                      label="Email"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      errorMessage={errors.email}
                      className="mb-4"
                    />
                    {renderErrorMessage("email")}
                    <MDBInput
                      label="Phone"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      errorMessage={errors.phone}
                      className="mb-4"
                    />
                    {renderErrorMessage("phone")}
                    <MDBTextArea
                      label="Additional information"
                      rows={4}
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      errorMessage={errors.additionalInfo}
                      className="mb-4"
                    />
                    {renderErrorMessage("additionalInfo")}
                    <div
                      className="d-flex justify-content-center"
                      style={{ width: "900px" }}
                    >
                      {/* Checkbox or other fields */}
                    </div>
                    <MDBBtn
                      size="lg"
                      block
                      style={{ backgroundColor: "#00338e" }}
                      onClick={handleSubmit}
                    >
                      Add Address
                    </MDBBtn>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol
              md="4"
              className="mb-4"
              style={{ width: "1100px", paddingLeft: "200px" }}
            >
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <MDBTypography
                    id="summary-section"
                    tag="h5"
                    className="mb-0"
                    style={{ fontSize: "50px", color: "#3f6ac8" }}
                  >
                    Summary
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody
                  style={{ paddingLeft: "250px", paddingRight: "250px" }}
                >
                  <MDBListGroup flush style={{ fontSize: "17px" }}>
                    <table
                      class="ui celled table"
                      style={{ textAlign: "center" }}
                    >
                      <thead style={{ fontSize: "20px" }}>
                        <tr>
                          <th style={{ alignItems: "center" }}>Product</th>

                          <th style={{ alignItems: "center" }}>Cost</th>
                        </tr>
                      </thead>

                      <tbody style={{ fontSize: "15px" }}>
                        {finalCart.map((val) => {
                          return (
                            <tr>
                              <td data-label="userQuantity">{val.name}</td>

                              <td data-label="amountBought">
                                {val.amountBought}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">

                    Shipping

                    <span>Gratis</span>

                  </MDBListGroupItem> */}

                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>

                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>

                      <span>
                        <strong>Rs.{finalamount}</strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>
                  <div>
                    {showItem ? (
                      <StripeContainer />
                    ) : (
                      <>
                        <div className="payform">
                          <button
                            onClick={() => setShowItem(true)}
                            style={{
                              border: "none",
                              backgroundColor: "#00338e",
                              color: "#fff",
                              height: "40px",
                            }}
                          >
                            Proceed to Buy
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </>
  );
}

export {finalamount, finalCart};
