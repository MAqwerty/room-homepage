import React from "react";
import "./Style-slider.css"
import SVGleft from "./../../../assets/svg/icon-angle-left.svg"
import SVGright from "./../../../assets/svg/icon-angle-right.svg"
import { useEffect } from "react";

function ChangeSlider () {

    useEffect(() => {
     
        let slides = document.querySelectorAll('.slides')
        let slideIndex = 0;

        ShowSlides();
        function ShowSlides() {      
            for(let i=0;i< slides.length;i++){
                slides[i].style.display = "none";
            }
            slideIndex++;
            if(slideIndex > slides.length){
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "flex";
            setTimeout(ShowSlides,2000);
        }

        function prevSlides() {
            switch(slideIndex){
                case 1:
                    slideIndex=3
                break;
                case 2:
                    slideIndex--
                break;
                case 3:
                slideIndex--
                break;
            }
            for(let i=0;i< slides.length;i++){
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "flex";
        }

        function nextSlides() {
            switch(slideIndex){
                case 1:
                    slideIndex++
                break;
                case 2:
                    slideIndex++
                break;
                case 3:
                slideIndex=1
                break;
            }
            for(let i=0;i< slides.length;i++){
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "flex";
        }

        let prev = document.querySelectorAll('#prev')
        let next = document.querySelectorAll('#next')

        for(let i=0;i<6;i++){
            prev[i].addEventListener('click',prevSlides);
            next[i].addEventListener('click',nextSlides);
        }

    }, []);

    return(
        <>
            <div className="BTNs">
                <div className="BTN" id="prev" ><img src={SVGleft} /></div>
                <div className="BTN" id="next" ><img src={SVGright} /></div>
            </div>
        </>
    )
}

export default ChangeSlider;