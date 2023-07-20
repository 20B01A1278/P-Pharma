import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./PaymentForm.css";
import {finalamount} from "../Deliveryadd"
const CARD_OPTIONS = {
  
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: finalamount*100,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          swal("", "Order placed", "success") ;
          setSuccess(true);
          navigate("/InvoicePage") ;
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ? 
        <form onSubmit={handleSubmit} style={{ maxWidth: "1000px" }}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <div className="payform">
          <button style={{border:"none", backgroundColor:"#00338e", color:"#fff", height:"40px", fontSize:'20px'}}>Pay</button>
          </div>
        </form>
       : 
        <div>
          <h1> Thank You!! </h1>
          {/* <Link to="/InvoicePage" style={{fontSize:"20px"}}>Click here to go to Invoice</Link> */}
        </div>
      }
    </>
  );
}
