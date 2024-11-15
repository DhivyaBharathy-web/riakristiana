import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ria Kristiana</span>
          <span>

Actress | Model | TV Host
25+ Commercials | Vani Rani, Kalyana Parisu, Anbe Vaa, Poikal Kudhirai
TV: Galatta Tamil, Nickelodeon, News Tamil
Languages: English, Tamil, Spanish
Born Feb 2
</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
        <button className="button i-button" style={{ width: "200px" }}>DM for Collab</button>

        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://www.youtube.com/@RiaKristiana" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="" style={{ width: "150px", height: "150px" }}/> </a>
           <a href="https://www.instagram.com/riakristiana_official/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="" style={{ width: "150px", height: "150px" }}/></a>
          <a href="https://www.facebook.com/profile.php?id=100063824687566" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="" style={{ width: "150px", height: "150px" }} /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />


        {/* animation */}
       
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
