import React from "react";
import "./footer.css";
import fb from "./facebook.png";
import insta from "./instagram.png";
import twt from "./twitter.png";
import lin from "./linkedin.png";
function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div" style={{textDecoration:'none', paddingLeft:"80px"}}>
            <h4>About pHARMA</h4>
            <a href="/">
              <p>About us</p>
            </a>
            <a href="/">
              <p>Career</p>
            </a>
            <a href="/">
              <p>Blog</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Need help</h4>
            <a href="/">
              <p>Browse all medicine</p>
            </a>
            <a href="/">
              <p>Browse all stores</p>
            </a>
            <a href="/">
              <p>FAQs</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Categories</h4>
            <a href="/">
              <p>Personal care</p>
            </a>
            <a href="/">
              <p>Home care</p>
            </a>
            <a href="/">
              <p>Mother and baby care</p>
            </a>
            <a href="/">
              <p>Diabetic care</p>
            </a>
            <a href="/">
              <p>Skin care</p>
            </a>
            <a href="/">
              <p>Elderly care</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Policy information</h4>
            <a href="/">
              <p>Privacy Policy</p>
            </a>
            <a href="/">
              <p>Terms & Conditions</p>
            </a>
            <a href="/">
              <p>Customer support policy</p>
            </a>
            <a href="/">
              <p>Return policy</p>
            </a>
          </div>
          <div className="sb_footer-links-div" style={{paddingRight:"80px"}}>
            <h4 >Follow us on</h4>
            <div>
              <a>
                <img src={fb} alt="" />
              </a>
              <a>
                <img src={insta} alt="" />
              </a>

              <a>
                <img src={twt} alt="" />
              </a>
              <a>
                <img src={lin} alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} pHARMA. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
