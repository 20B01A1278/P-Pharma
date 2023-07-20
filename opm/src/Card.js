import React from "react";
import { useState } from "react";
import { BsCart4, BsCheckLg } from "react-icons/bs";
import { Button, Card } from "react-bootstrap";
import "./Card.css";
import "./Products.css";
import db from "./firebase";
import swal from "sweetalert";
import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import "./flip-transition.css";
import { CSSTransition } from "react-transition-group";
import { userid, cartProds } from "./Main";
import "./flippable-card.css";
let totalCost = 0;
var cartProducts = [];
const Cards = ({
  name,
  company,
  price,
  Image,
  id,
  DBname,
  Dosage,
  val,
  stockText,
  Description,
}) => {
  const [showFront, setShowFront] = useState(true);
  const [cart, setCart] = useState(cartProds);
  const [flip, setFlip] = useState(false);
  const checkAvailableQuantity = (quantityValue) => {
    if (parseInt(quantityValue) > 0) {
      return "Available in stock";
    } else {
      return "Not Available in stock";
    }
  };
  const stockFunction = (stockValue) => {
    if (stockValue === "Available in stock") {
      return <Card.Text style={{ color: "green" }}>{stockValue}</Card.Text>;
    } else {
      return <Card.Text style={{ color: "red" }}>{stockValue}</Card.Text>;
    }
  };
  const AddedToCart = (refID, dbname) => async (e) => {
    const item = doc(db, dbname, refID);
    const itemdoc = await getDoc(item);
    if (parseInt(itemdoc.data().Quantity) == 0) {
      swal("", "Item is not available in stock", "warning");
    } else {
      let isPresent = false;

      cart.forEach((innerItem) => {
        if (innerItem.id === refID) {
          isPresent = true;
        }
      });

      if (isPresent) {
        swal(itemdoc.data().name + " already added to cart");
      } else {
        const orderid = doc(collection(db, "Users", userid, "Orders")).id;
        cart.push({
          ...itemdoc.data(),
          Care: dbname,
          amountBought: itemdoc.data().price,
          orderid: orderid,
          userQuantity: "1",
        });
        setCart([...cart]);
        totalCost += parseFloat(itemdoc.data().price);
        console.log(cart);
        swal("", itemdoc.data().name + " added to cart", "success");
      }
    }
  };
  return (
    <>
      <div
        className="flippable-cont-container"
        style={{ display: "inline-block", margin: "10px" }}
      >
        {/* <CSSTransition in={showFront} timeout={150} classNames="flip"> */}
        {/* <div className="card"> */}
          <Card style={{ height:"450px"}}>
          <span style={{ display: "flex" }}>
            <Card.Body
              key={id}
              style={{ display: "inline-block", margin: "10px" }}
            >
              <div>
                <CSSTransition in={showFront} timeout={150} classNames="flip">
                  <div
                    className="cont"
                    onClick={() => {
                      setShowFront((v) => !v);
                    }}
                  >
                    <Card.Img
                      src={Image}
                      style={{
                        height: "200px",
                        width: "250px",
                        padding: "10px",
                      }}
                      className="img-fluid rounded"
                    ></Card.Img>
                    <div className="cont-back">{Description}</div>
                  </div>
                </CSSTransition>
                <Card.Title style={{ fontWeight: "bolder" }}>
                  {name} {Dosage}
                </Card.Title>
                <Card.Text>{company}</Card.Text>
                {stockFunction(stockText)}
                {/* <hr style={{ border: "1px solid green" }}></hr> */}
                <Card.Text style={{ fontWeight: "bold" }}>
                  Price: {price}/-
                </Card.Text>
                <Button
                  style={{ backgroundColor: "darkblue", color:"white" }}
                  onClick={AddedToCart(id, DBname)}
                >
                  ADD TO CART
                  <span style={{ padding: "8px" }}>
                    <BsCart4 style={{ fontSize: "large" }} />
                  </span>
                </Button>
              </div>
            </Card.Body>
          </span>
          </Card>
        </div>
      {/* </div> */}
    </>
  );
};
export default Cards;
