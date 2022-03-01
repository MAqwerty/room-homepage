import React from "react";
import Slider from "./Slider/Slider"
import "./Styles-pages/Home.css"
import IMGdark from "./../../assets/images/image-about-dark.jpg"
import IMGlight from "./../../assets/images/image-about-light.jpg"
import { slideData } from "./Slider/data";

const Home = () => {

  return (
    <>
      <header> 
        <div className="slider">
            {slideData.map((data, key) => {
              return (
                <div key={key}>
                  <Slider title={data.title} description={data.description} imgSrc={data.imgSrc} link={data.link} MbileImgSrc={data.MbileImgSrc}
                  />
                </div>
              );
            })}
        </div>
       </header>

       <main>
         <img className="IMGdark" src={IMGdark} alt="" />
         <div className="text">
            <h2 className="main-h2">About our furniture</h2>
            <p>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
            </p>
         </div>
         <img className="IMGlight" src={IMGlight} alt="" />
       </main>
    </>
  )
};

export default Home;
