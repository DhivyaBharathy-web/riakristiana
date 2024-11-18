import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Ads & TV Shows</span>
          <spane>
          I have worked on various TV shows and advertisements, including brands like
            <br />
            Chandak Real Estate, Nippon Paint, Chennai Silks, and the Election Commission of Tamilnadu.
            
            <br />
            I’ve also been a VJ for Galatta Tamil, featured on 
            <br />
            Nickelodeon and News Tamil show, and acted in the series School Bag Secret
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">For Paid Collab</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle" >
          <img src={Upwork} alt="" style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt=""  style={{ width: '150px', height: '100px', objectFit: 'cover', 
    objectPosition: 'right'}}/>
          </div>
          <div className="w-secCircle">
  <img src={Amazon} alt="" style={{ width: '100px', height: '100px' }} />
</div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt=""  style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
          </div>
          <div className="w-secCircle" >
          <img src={Facebook} alt="" style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
          </div>
          
        </motion.div>
        
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
