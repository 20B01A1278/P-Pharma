import React from "react";
import NavbarMain from "./NavbarMain" ;
import Personalprofile from "./personalprofile";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useRef as UseRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function Order() {
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
    <Personalprofile />
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
                        <p className="small text-muted mb-1">Date</p>
                        <p>10 April 2021</p>
                      </MDBCol>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Order No.</p>
                        <p>012j1gvs356c</p>
                      </MDBCol>
                    </MDBRow>

                    <div
                      className="mx-n5 px-5 py-4"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <MDBRow>
                        <MDBCol md="8" lg="9">
                          <p>medicine 1</p>
                        </MDBCol>
                        <MDBCol md="4" lg="3">
                          <p>299.99</p>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8" lg="9">
                          <p className="mb-0">medicien 2</p>
                        </MDBCol>
                        <MDBCol md="4" lg="3">
                          <p className="mb-0">25.00</p>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="8" lg="9">
                          <p className="mb-0">Total 2</p>
                        </MDBCol>
                        <MDBCol md="4" lg="3">
                          <p className="mb-0">525.00</p>
                        </MDBCol>
                      </MDBRow>
                    </div>

                    <div>
                      <button class="btn btn-primary" onClick={downloadPDF}>
                        {" "}
                        Donwload pdf
                      </button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>

     
        <section
          className="h-100 h-custom"
          style={{ backgroundColor: "white" }}
        >
          <MDBContainer className="py-5 h-100">
          <div ref={pdfRef}>
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="8" xl="6">
              
                <MDBCard className="border-top border-bottom border-3 border-color-custom">
                  <MDBCardBody className="p-5">
                    <p className="lead fw-bold mb-5" style={{ color: "black" }}>
                      Purchase Reciept
                    </p>

                    <MDBRow>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Date</p>
                        <p>20 march 2021</p>
                      </MDBCol>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Order No.</p>
                        <p>abcd</p>
                      </MDBCol>
                    </MDBRow>

                    <div
                      className="mx-n5 px-5 py-4"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <MDBRow>
                        <MDBCol md="8" lg="9">
                          <p>medicine 1</p>
                        </MDBCol>
                        <MDBCol md="4" lg="3">
                          <p>299.99</p>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8" lg="9">
                          <p className="mb-0">medicien 2</p>
                        </MDBCol>
                        <MDBCol md="4" lg="3">
                          <p className="mb-0">25.00</p>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="8" lg="9">
                          <p className="mb-0">Total 2</p>
                        </MDBCol>
                        <MDBCol md="4" lg="3">
                          <p className="mb-0">525.00</p>
                        </MDBCol>
                      </MDBRow>
                    </div>
                   
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </div>
            <button class="btn btn-primary" onClick={downloadPDF}>
                      Donwload pdf
                    </button>
          </MDBContainer>
        </section>
        </>
  );
}
