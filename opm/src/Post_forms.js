import React, { useState, useEffect } from "react";
import "./Addprod.css";
const Form = () => {
  return (
    // <useStateContext>
    <div>
      <div className="form-container">
        <h1 className="form-heading">ADD Product</h1>
        <div className="form-step">
          <div className="left-side-form">
            <label htmlFor="title">
              Product Name<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              className="g_text_style"
              id="title"
              placeholder="Enter product name"
              style={{ width: "500px" }}
              required
              maxLength={150}
            />
            <br />
            <label htmlFor="title">
              Company<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              className="g_text_style"
              id="title"
              placeholder="Enter Company Name"
              style={{ width: "500px" }}
              required
              maxLength={150}
            />

            <br />
            <label htmlFor="title">
              Product ID<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              className="g_text_style"
              id="title"
              placeholder="Enter Product ID"
              style={{ width: "500px" }}
              required
              maxLength={150}
            />

            <br />
            <label htmlFor="title">
              Dosage<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              className="g_text_style"
              id="title"
              placeholder="Enter Dosage"
              style={{ width: "500px" }}
              required
              maxLength={150}
            />

            <br />

            <br />

            <br />

            <button className="next_btn">Submit</button>
          </div>

          <div className="right-side-form">
            <label htmlFor="title">
              Quantity<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              className="g_text_style"
              id="title"
              placeholder="Enter Quantity"
              style={{ width: "500px" }}
              required
              maxLength={150}
            />

            <br />
            <label htmlFor="title" style={{ alignItems: "left" }}>
              Price<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              className="g_text_style"
              id="title"
              placeholder="Enter Price"
              style={{ width: "500px" }}
              required
              maxLength={150}
            />

            <br />
            <label htmlFor="title" style={{ alignItems: "left" }}>
              Upload Image<span className="required">*</span>
            </label>
            <br />
            {/* <input
              type="text"
              className="g_text_style"
              id="title"
              placeholder="Enter Price"
              style={{ width: "500px" }}
              required
              maxLength={150}
            /> */}
            <input type="file" accept="image/*" />

            <br />

            <br />
            <label htmlFor="techStack">Select the care</label>

            <select id="techStack" style={{ marginBottom: "20px" }}>
              <option value="">Select</option>

              <option value="Health">Health Care</option>

              <option value="Skin">Skin Care</option>

              <option value="Baby">Baby Care</option>

              <option value="coivd">Covid Care</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
