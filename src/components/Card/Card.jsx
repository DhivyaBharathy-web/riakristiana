import React, { useState } from 'react';
import './Card.css';
import sampleVideo from './video.mp4'; // Assuming video.mp4 is in src folder

const Card = ({ emoji, heading, detail, color, videos = [] }) => {
  const [showVideos, setShowVideos] = useState(false);

  const handleWatchVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" onClick={handleWatchVideos}>
        Watch Videos
      </button>

      {showVideos && (
        <div className="video-container">
         

          {videos.length > 0 ? (
            videos.map((videoSrc, index) => (
              <video key={index} width="320" height="240" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))
          ) : (
            <video width="320" height="240" controls>
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;