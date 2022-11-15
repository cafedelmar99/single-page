import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import photoOne from '../assets/image-slide-1.jpg'
import photoTwo from '../assets/image-slide-2.jpg'
import photoThree from '../assets/image-slide-3.jpg'
import photoFour from '../assets/image-slide-4.jpg'
import photoFive from '../assets/image-slide-5.jpg'
import prevArrow from '../assets/icon-arrow-left.svg'
import nextArrow from '../assets/icon-arrow-right.svg'

const photos = [
    {
        id:"p1",
        title:"first photo",
        source:photoOne
    },
    {
        id:"p2",
        title:"second photo",
        source:photoTwo
    },
    {
        id:"p3",
        title:"photo three",
        source:photoThree
    },
    {
        id:"p4",
        title:"photo four",
        source:photoFour
    },
    {
        id:"p5",
        title:"photo five",
        source:photoFive
    }
]


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {
        setCurrentIndex((currentIndex +1)%photos.length);
        console.log("asee")
    }
    const prev = () => {
        console.log("asee")
        setCurrentIndex((currentIndex - 1 + photos.length)%photos.length)
    }
    return(
        <>
        <CarouselBody>
            <h4>My Work</h4>
            <div>
                <img src={photos[(currentIndex - 1 + photos.length)%photos.length].source} alt={photos[(currentIndex - 1 + photos.length)%photos.length].title}/>
                <img src={photos[currentIndex].source} alt={photos[currentIndex].title}/>
                <img src={photos[(currentIndex + 1)%photos.length].source} alt={photos[(currentIndex +1)%photos.length].title}/>
            </div>
            </CarouselBody>
        <ButtonHolder>
            <PrevButton onClick={prev}><img src={prevArrow} alt="prevarrow"/></PrevButton>
            <NextButton onClick={next}><img src={nextArrow} alt="nextarrow"/></NextButton>
        </ButtonHolder>
        </>
        
    )
}

export default Carousel;


const CarouselBody = styled.div`
    margin-top:  72px;
    &>h4{
        margin-top: 28px;
        margin-bottom: 28px;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        @media only screen and (min-width:768px){
            margin-top: 120px;
            margin-bottom: 40px;
            font-size: 32px;
        }
    }
    &>div{
        display: flex;
        justify-content: center;
        &>img:nth-of-type(1){
            width: 68vw;
            height: 45.3vw; 
            position: absolute;
            right: 88vw;
            border-radius: 20px;
            @media only screen and (min-width: 1440px){
                width: 37.5vw;
                height: 380px;
                right: 70vw;
            }
        }
        &>img:nth-of-type(2){
            margin: 0px 15px 0px 15px;
            width: 68vw;
            height: 45.3vw;
            border-radius: 20px;
            @media only screen and (min-width: 1440px){
                width: 37.5vw;
                height: 380px;
            }

        }
       &>img:nth-of-type(3){
            width: 68vw;
            height: 45.3vw;
            position: absolute;
            left: 88vw;
            border-radius: 20px;
            @media only screen and (min-width: 1440px){
                width: 37.5vw;
                height: 380px;
                left: 70vw;
            }
        }
}
`;

const ButtonHolder = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

const PrevButton = styled.button`
    background-color: black;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 10px;
    border: none;
    &:hover {
        background-color: #755CDE;
    }
`;

const NextButton = styled.button`
    background-color: black;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: none;
    &:hover {
        background-color: #755CDE;
    }
`;