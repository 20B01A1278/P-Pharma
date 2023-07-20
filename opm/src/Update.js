import {React,useEffect,useState} from "react";
import "./Update.css";
import { collection,getDocs,updateDoc,doc, deleteDoc } from "firebase/firestore";
import { Button } from 'react-bootstrap';
import AdminNavbar from "./AdminNavbar";
import db from "./firebase";
import swal from 'sweetalert';
let finalData = [];
function Update(){
  const [count, setCount] = useState('0');
  const [drugs,setDrugs]=useState([{}]);
  //const [calculation, setCalculation] = useState(0);
    //const navigate = useNavigate();
    // useEffect(() => {
    //   Medications();
    // }, [DB]);
   const Medications = (DB) => async (e) =>{
        e.preventDefault();
        let products = [];
        const collectionProducts = collection(db,DB);
        const value = await getDocs(collectionProducts);
        value.forEach((doc) => {
          products.push({ ...doc.data(),"docRef":doc.id,"DBname":DB});
        });
        console.log(products);
        setDrugs(products);
        finalData = products;
        console.log(drugs);
  }
  const handleUpdate = (refID,cnt,dbname,orgQuantity) => async (e) =>{
    e.preventDefault();
    const postRef = doc(db,dbname,refID);
    await updateDoc(postRef, {
      Quantity:(parseInt(cnt)+parseInt(orgQuantity)).toString(),
    });
    // alert('Product Quantity Updated!');
    swal({
      title: "Are you sure?",
      text: "Do you want to update the quantity",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your quantity is updated", {
          icon: "success",
        });
        window.location.reload(false);
      } else {
        swal("Your quantity is not updated!");
      }
    });
    
  }
  const handleDelete = (refID,dbname) => async (e) =>{
    e.preventDefault();
    const postref1=doc(db,dbname,refID);
    await deleteDoc(postref1);
    // alert('Product Deleted successfully!');
    swal({
      title: "Are you sure?",
      text: "Do you want to delete the product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your quantity is deleted", {
          icon: "success",
        });
        window.location.reload(false);
      } else {
        swal("Your quantity is not deleted!");
      }
    });
    // window.location.reload(false);
  }
  return (
    <>
    <div><AdminNavbar/></div>
      <div className="background_img">
        <div className="container_">
          <div className="abcdefg">
             <Button onClick={Medications("HealthCare")} alt="Health Care"><p>Health Care </p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={Medications("SkinCare")} alt="Skin Care"><p>Skin Care</p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={Medications("BabyCare")} alt="Baby Care"><p>Baby Care </p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={Medications("Drugs")} alt="Covid Care"><p>Covid Care </p></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
          <div className="stock_container" style={{fontFamily:"Barlow, sans-serif"}}>
            <div className="container_table" >
              <table class="ui celled table" style={{textAlign:"center"}}>
                <thead style={{fontSize:"20px"}}>
                  <tr>
                    <th style={{alignItems:"center"}}>Medicine name</th>
                    <th style={{alignItems:"center"}}>Quantity</th>
                    <th style={{alignItems:"center"}}>Update stock</th>
                    <th style={{alignItems:"center"}}>Product deletion</th>
                  </tr>
                </thead >
                <tbody style={{fontSize:"15px"}}>
                  {finalData.map((val) => {
                    return (
                      <tr>
                        <td data-label="Medicine name">{val.name}</td>
                        <td data-label="Quantity">{val.Quantity}</td>
                        <td data-label="Update stock">
                          <input type="text" placeholder="Enter quantity" style={{ height: "35px", borderRadius: "5px" }} 
                          onChange={(event) =>setCount((prev) => (event.target.value))}/>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span>
                            <button className="positive ui button" onClick={handleUpdate(val.docRef,count,val.DBname,val.Quantity)}>Update</button>
                            {/* <button className="positive ui button" onClick={() => setCount((c) => c + val.Quantity)}>Update</button> */}
                          </span>
                        </td>
                        <td data-label="Product deletion">
                          <button className="negative ui button" onClick={handleDelete(val.docRef,val.DBname)}>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  );
}

export default Update;
