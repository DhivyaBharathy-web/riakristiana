import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>riakarthickr@gmail.com</span>
        <div className="f-icons">
  <a href="https://www.instagram.com/riakristiana_official/" target="_blank" rel="noopener noreferrer">
    <Insta color="white" size={"3rem"} />
  </a>
  <a href="https://www.facebook.com/profile.php?id=100063824687566" target="_blank" rel="noopener noreferrer">
    <Facebook color="white" size={"3rem"} />
  </a>
  <a href="https://www.youtube.com/@RiaKristiana" target="_blank" rel="noopener noreferrer">
    <Youtube color="white" size={"3rem"} />
  </a>
</div>

      </div>
    </div>
  );
};

export default Footer;
