import React from "react";
import "./AdWork.css";
import image from '../../img/2.jpeg';
import imagetwo from '../../img/arun.jpg';
import imagethree from '../../img/leather.PNG';
import imagefour from '../../img/revathi.PNG';

import { motion } from "framer-motion";

const AdWork = () => {
  // List of ads with images for a more visual appeal
  const ads = [
    { 
      name: "Arun Ice Cream", 
      description: "Refreshing flavors for all seasons.", 
      image: imagetwo 
    },
    
    { 
      name: "Tata Leather Footwear", 
      description: "Premium quality leather footwear.", 
      image: imagethree 
    },
    { 
      name: "Revathi Store", 
      description: "Your one-stop shop for all essentials.", 
      image: imagefour
    },
    { 
      name: "Anandham Silks", 
      description: "Elegant sarees for every occasion.", 
      image: image 
    },
  ];

  const transition = {
    duration: 0.6,
    type: "spring",
  };

  return (
    <div className="adwork-section" id="adwork">
      <div className="adwork-header">
        <h2>Top Ads I've Worked On</h2>
        <p>Here's a showcase of some of the top advertisements I've been involved with:</p>
      </div>
      <div className="adwork-grid">
        {ads.map((ad, index) => (
          <motion.div
            className="adwork-card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.1 * index }}
            whileHover={{ scale: 1.1, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="card-image">
              <img src={ad.image} alt={ad.name} />
            </div>
            <div className="card-content">
              <h3>{ad.name}</h3>
              <p>{ad.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="serial-section">
        <h3>Current Serial Ad: Moondru Mudichi (Ongoing)</h3>
      </div>
    </div>
  );
};

export default AdWork;
