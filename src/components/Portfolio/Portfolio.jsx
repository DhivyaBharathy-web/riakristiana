import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.jpeg";
import Ecommerce from "../../img/ecommerce.jpeg";
import HOC from "../../img/hoc.jpeg";
import MusicApp from "../../img/musicapp.jpeg";
import Krishna from "../../img/3.jpeg"; // New image
import Anandham from "../../img/4.jpeg"; // New image
import imageone from "../../img/5.jpeg";
import imagetwo from "../../img/6.jpeg"; // New image
import imagethree from "../../img/7.jpeg"; // New image
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Works</span>
      
      {/* slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        <SwiperSlide>
          <img src={Sidebar} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Krishna} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Anandham} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageone} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagetwo} alt=""  style={{ width: '300px', height: '500px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagethree} alt=""  style={{ width: '300px', height: '400px', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;