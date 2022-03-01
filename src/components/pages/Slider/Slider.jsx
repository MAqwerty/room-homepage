import React from "react";
import "./Style-slider.css"
import Arrow from "./../../../assets/svg/icon-arrow.svg"
import ChangeSlider from "./ChangeSlider"

function Slider ({imgSrc,MbileImgSrc,title,description,link,}) {

    return(
        <>
            <div className="slides fade">
                <div className="TOPimg PcImgSrc">
                    <img src={imgSrc} className="img" alt="" />
                </div>

                <div className="TOPimg MbileImgSrc">
                    <img src={MbileImgSrc} className="img" alt="" />
                </div>
                
                <div className="TEXT">
                    <h1 className="title"> {title} </h1>
                    <p className="description"> {description} </p>
                    <a href={link} id="ssda" className="link">Shop now <img src={Arrow} className="Arrow" alt="" /></a>                  
                    <div className="ChangeSlider">
                        <ChangeSlider />
                    </div>
                </div>

                <div className="Mobile-ChangeSlider">
                   <ChangeSlider />
                </div>
            </div>      
        </>
    )

}

export default Slider;