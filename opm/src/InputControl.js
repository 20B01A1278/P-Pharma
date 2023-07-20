import React from "react";
import Styles from "./InputControl.css";
function InputControl(props) {
  return (
    <form class="needs-validation">
    <div style={{fontFamily: "Barlow, sans-serif"}}className={Styles.container}>
      {props.label && <label>{props.label}</label>}<br></br>
      <input type="text" {...props} />
    </div>
    </form>
  );
}
export default InputControl;
