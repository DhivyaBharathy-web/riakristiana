import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
    <div className="achievement">
      {/* darkMode */}
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>7+</div>
      <span style={{color: darkMode?'white':''}}>years </span>
      <span>Experience</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>25+</div>
      <span style={{color: darkMode?'white':''}}>Commercial </span>
      <span>Advertisements</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
      <span style={{color: darkMode?'white':''}}>TV </span>
      <span>Serials</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1</div>
      <span style={{color: darkMode?'white':''}}>Feature </span>
      <span>Movie</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
      <span style={{color: darkMode?'white':''}}>TV </span>
      <span>Shows</span>
    </div>
  </div>
    
    
  );
};

export default Experience;
