import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useRef as UseRef } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {finalCart,finalamount} from "./Cart";
import NavbarMain from "./NavbarMain";

function InvoicePage() {
  const pdfRef = UseRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };
  return (
    <>
    <NavbarMain />
      <div ref={pdfRef}>
        <section
          className="h-100 h-custom"
          style={{ backgroundColor: "white" }}
        >
          <h1>Order History</h1>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="8" xl="6">
                <MDBCard className="border-top border-bottom border-3 border-color-custom">
                  <MDBCardBody className="p-5">
                    <p className="lead fw-bold mb-5" style={{ color: "black" }}>
                      Purchase Reciept
                    </p>

                    <MDBRow>
                      <MDBCol className="mb-3">
                        <b>Date & Time</b><br></br>
                        <p id="current_date"><b>{Date()}</b></p>
                      </MDBCol>
                    </MDBRow>

                    <table class="ui celled table" style={{textAlign:"center"}}>
                <thead style={{fontSize:"20px"}}>
                  <tr>
                    <th style={{alignItems:"center"}}>Product</th>
                    <th style={{alignItems:"center"}}>Cost</th>
                  </tr>
                </thead >
                <tbody style = {{fontSize:"15px"}}>
                  {finalCart.map((val) => {
                    return (
                      <tr>
                        <td data-label="userQuantity">{val.name}</td>
                        <td data-label="amountBought">{val.amountBought}</td>
                     </tr>
                    );
                  })}
                </tbody>
              </table>
              <b>SubTotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{finalamount}/-</span></b><br></br><br>
              </br>
              <b style={{color:"green"}}>Status: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Paid Successfully!!</span></b>
              <br></br><br></br>
                    <div>
                      <Button style={{backgroundColor:"#00338E"}} onClick={downloadPDF}>
                        {" "}
                        Donwload pdf
                      </Button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
      
    </>
  );
}
export default InvoicePage;

