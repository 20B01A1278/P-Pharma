// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import InputControl from "./InputControl";
// import { db } from "./firebase";
// import { collection, addDoc, setDoc, doc } from "firebase/firestore";
// import swal from "sweetalert";
// import "./Addprod.css";
// import { storage } from "./firebase";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

// import AdminNavbar from "./AdminNavbar";
// function Adminadd() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     quant: "",
//     price: "",
//     Dosage: "",
//     Image: "",
//     company: "",
//     care:"",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
//   const handleSubmission = async (e) => {
//     e.preventDefault();

//     if (!values.name || !values.quant || !values.price || !values.care) {
//       swal("", "Fill all required fields", "warning");
//       return;
//     }
//     if(Number(values.price) <= 0) {
//       // serErrorMsg("please enter valid price")
//       setErrorMsg("Please enter valid price")
//     }

//     setErrorMsg("");

//     try {
//       const file = document.getElementById("img12").files[0];
//       if (!file) {
//         swal("", "Please select an image", "warning");
//         return;
//       }

//       const storageRef = ref(storage, file.name);
//       const uploadTask = uploadBytesResumable(storageRef, file);
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {},
//         (error) => {
//           swal("", "Error uploading image: " + error, "warning");
//         },
//         () => {
//         getDownloadURL(uploadTask.snapshot.ref)
//             .then((downloadURL) => {
//               values.Image = downloadURL;
//               console.log(downloadURL);
//               addProduct();
//             })
//             .catch((error) => {
//               swal("", "Error getting image URL: " + error, "warning");
//             });
//         }
//       );
//     } catch (error) {
//       swal("", "Error uploading image: " + error,"warning");

//     }
//   };
//   const addProduct = async () => {
//     try {
//       const prescriptionRequired = document.getElementById("r1").checked;
//       //const careSelect = document.getElementById("care");
//       //const careValue = careSelect.options[careSelect.selectedIndex].value;
//       const id1 = doc(collection(db,values.care)).id;
//       setDoc(doc(db, values.care,id1), {
//       name: values.name,
//       price: values.price,
//       company: values.company,
//       Quantity: values.quant,
//       Dosage: values.Dosage,
//       Image: values.Image,
//       PrescriptionRequired: prescriptionRequired ? "Yes" : "No",
//       id: id1,
//     })
//       swal("", "Product added successfully!", "success");
//       navigate("/Addprod");
//     } catch (error) {
//       swal("", "Error adding product: " + error,"warning");
      
//     }
//   };
//   return (
//     <>
//       <AdminNavbar />
//       <div className="lcontainer" style={{ paddingTop: "20px" }}>
//         <div className="form-container">
//           <div style={{ width: "1500px" }}>
//             <h1
//               className="form-heading"
//               style={{ fontSize: "40px", color: "darkblue" }}
//             >
//               Add Product
//             </h1>
//             <div className="form-step">
//               <div className="left-side-form">
//                 <InputControl
//                 label="Product Name"
//                   type="text"
//                   className="g_text_style"
//                   placeholder="Enter product name"
//                   style={{ width: "500px" }}
//                   required
//                   maxLength={150}
//                   onChange={(event) =>
//                     setValues((prev) => ({ ...prev, name: event.target.value }))
//                   }
//                 />
//                 <InputControl
//                 label="Company"
//                   type="text"
//                   className="g_text_style"
//                   placeholder="Enter Company Name"
//                   style={{ width: "500px" }}
//                   required
//                   maxLength={150}
//                   onChange={(event) =>
//                     setValues((prev) => ({
//                       ...prev,
//                       company: event.target.value,
//                     }))
//                   }
//                 />                
//                 <InputControl
//                 label="Dosage"
//                   type="text"
//                   className="g_text_style"
//                   placeholder="Enter Dosage"
//                   style={{ width: "500px" }}
//                   required
//                   maxLength={150}
//                   onChange={(event) =>
//                     setValues((prev) => ({
//                       ...prev,
//                       Dosage: event.target.value,
//                     }))
//                   }
//                 />
//                 <button className="next_btn" disabled={submitButtonDisabled} onClick={handleSubmission} 
//                   style={{marginTop:'50px'}}>
//                   Submit
//                 </button>
//               </div>
//               <div className="right-side-form">
               
                
//                 <InputControl
//                 label="Quantity"
//                   type="text"
//                   className="g_text_style"
//                   placeholder="Enter Quantity"
//                   style={{ width: "500px" }}
//                   required
//                   maxLength={150}
//                   onChange={(event) =>
//                     setValues((prev) => ({
//                       ...prev,
//                       quant: event.target.value,
//                     }))
//                   }
//                 />
                
               
                
//                 <InputControl
//                 label="Price"
//                   type="text"
//                   className="g_text_style"
//                   placeholder="Enter Price"
//                   style={{ width: "500px" }}
//                   required
//                   maxLength={150}
//                   onChange={(event) =>
//                     setValues((prev) => ({
//                       ...prev,
//                       price: event.target.value,
//                     }))
//                   }
//                 />
//                 <InputControl
//                 label="Upload Image"
//                   type="file"
//                   id="img12"
//                   accept="image/*"
//                 />
//                 <label >Select the care</label>
//                 <select style={{ marginBottom: "20px" }} onChange={(event) =>
//                     setValues((prev) => ({...prev,care: event.target.value}))}>
//                   <option value="">Select</option>
//                   <option value="HealthCare">Health Care</option>
//                   <option value="SkinCare">Skin Care</option>
//                   <option value="BabyCare">Baby Care</option>
//                   <option value="CovidCare">Covid Care</option>
//                 </select>
//                 <input type="checkbox" id="r1" />
//                 <label htmlFor="vehicle1">Is Prescription Required?</label>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Adminadd;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "./InputControl";
import { db } from "./firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import swal from "sweetalert";
import "./Addprod.css";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import AdminNavbar from "./AdminNavbar";

function Adminadd() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    quant: "",
    price: "",
    Dosage: "",
    Image: "",
    company: "",
    care: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (
      !values.name ||
      !values.quant ||
      !values.price ||
      !values.care 
    ) {
      swal("", "Please fill all required fields correctly", "warning");
      return;
    }
    if(Number(values.price) <= 0) {
      swal("", "Please enter the valid price", "warning") ;
      return ;
    }

    setErrorMsg("");

    try {
      const file = document.getElementById("img12").files[0];
      if (!file) {
        swal("", "Please select an image", "warning");
        return;
      }

      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          swal("", "Error uploading image: " + error, "warning");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              values.Image = downloadURL;
              console.log(downloadURL);
              addProduct();
            })
            .catch((error) => {
              swal("", "Error getting image URL: " + error, "warning");
            });
        }
      );
    } catch (error) {
      swal("", "Error uploading image: " + error, "warning");
    }
  };

  const addProduct = async () => {
    try {
      const prescriptionRequired = document.getElementById("r1").checked;
      const id1 = doc(collection(db, values.care)).id;
      setDoc(doc(db, values.care, id1), {
        name: values.name,
        price: values.price,
        company: values.company,
        Quantity: values.quant,
        Dosage: values.Dosage,
        Image: values.Image,
        PrescriptionRequired: prescriptionRequired ? "Yes" : "No",
        id: id1,
      })
      .then(() => {
        swal("", "Product addded successfully", "success") ;
        navigate("/AdminMain");
      })
    } catch (error) {
      swal("", "Error adding product: " + error, "warning");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="lcontainer" style={{ paddingTop: "20px" }}>
        <div className="form-container">
          <div style={{ width: "1500px" }}>
            <h1
              className="form-heading"
              style={{ fontSize: "40px", color: "darkblue" }}
            >
              Add Product
            </h1>
            <div className="form-step">
              <div className="left-side-form">
                <InputControl
                  label="Product Name"
                  type="text"
                  className="g_text_style"
                  placeholder="Enter product name"
                  style={{ width: "500px" }}
                  required
                  maxLength={150}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                />
                <InputControl
                  label="Company"
                  type="text"
                  className="g_text_style"
                  placeholder="Enter Company Name"
                  style={{ width: "500px" }}
                  required
                  maxLength={150}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      company: event.target.value,
                    }))
                  }
                />
                <InputControl
                  label="Dosage"
                  type="text"
                  className="g_text_style"
                  placeholder="Enter Dosage"
                  style={{ width: "500px" }}
                  required
                  maxLength={150}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      Dosage: event.target.value,
                    }))
                  }
                />
                 <InputControl
                  label="Quantity"
                  type="text"
                  className="g_text_style"
                  placeholder="Enter Quantity"
                  style={{ width: "500px" }}
                  required
                  maxLength={150}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      quant: event.target.value,
                    }))
                  }
                />
                <button
                  className="next_btn"
                  disabled={submitButtonDisabled}
                  onClick={handleSubmission}
                  style={{ marginTop: "50px" }}
                >
                  Submit
                </button>
              </div>
              <div className="right-side-form">
               
                <InputControl
                  label="Price"
                  type="text"
                  className="g_text_style"
                  placeholder="Enter Price"
                  style={{ width: "500px" }}
                  required
                  maxLength={150}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      price: event.target.value,
                    }))
                  }
                />
                <InputControl
                  label="Upload Image"
                  type="file"
                  id="img12"
                  accept="image/*"
                />
                <br></br>
                <label>Select the care</label><br></br>
                <select
                  style={{ marginBottom: "20px" }}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, care: event.target.value }))
                  }
                >
                  <option value="">Select</option>
                  <option value="HealthCare">Health Care</option>
                  <option value="SkinCare">Skin Care</option>
                  <option value="BabyCare">Baby Care</option>
                  <option value="CovidCare">Covid Care</option>
                </select>
                <label >Is Prescription Required ?</label>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id="r1" style={{width:'10px', marginTop:'20px'}}/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminadd;


