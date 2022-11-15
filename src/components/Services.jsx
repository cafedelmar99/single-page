import React from 'react'
import styled from 'styled-components'
import graphicDesign from '../assets/pattern-graphic-design.svg'
import uiux from '../assets/pattern-ui-ux.svg'
import apps from '../assets/pattern-apps.svg'
import illustration from '../assets/pattern-illustrations.svg'
import photography from '../assets/pattern-photography.svg'
import motionGraphics from '../assets/pattern-motion-graphics.svg'


const Services = () => {
    return(
        <>
            <ServicesHolder>
                <div>
                <FirstPack>
                    
                    <img src={graphicDesign} alt="graphic design"/>
                    <h2>Graphic Design</h2>

            </FirstPack>
            <SecondPack>
                <div>
                    <div>
                        <img src={uiux} alt="uiux"/>
                        <h2>UI/UX</h2>
                    </div>
                    <div>
                        <img src={apps} alt="apps"/>
                        <h2>Apps</h2>
                    </div>
                </div>
                <div>
                    <img src={illustration} alt="illustration"/>
                    <h2>illustrations</h2>
                </div>
            </SecondPack>
                </div>
                
                <ThirdPack>
                    <div>
                        <img src={photography} alt="photography"/>
                        <h2>Photography</h2>
                    </div>
                    <div>
                        <img src={motionGraphics} alt="motiongraphics"/>
                        <h2>Motion Graphics</h2>
                    </div>
                </ThirdPack>
            </ServicesHolder>
        </>
    )
}

export default Services;

const ServicesHolder = styled.section`
    @media only screen and (min-width: 768px){
        &>div{
            display: flex;
            justify-content: space-between;
        }
    }
    @media only screen and (min-width: 1440px){
        display: flex;
        justify-content: space-between;
    }
`;

const FirstPack = styled.div`
    background-color: #755CDE;
    color: white;
    border-radius: 20px;
    width: 91.4vw;
    height: 364px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: 768px){
        max-width: 43.35vw;
        margin: 0px;
    }
    @media only screen and (min-width: 1440px){
        max-width: 24.58vw;
        margin: 0px;
    }
        &>img{
            width: 126px;
            height: 160px;
            margin-left: auto;
            display: block;
            padding: 24px 24px 0px 0px;
        }
        &>h2{
            font-size: 24px;
            font-weight: 700;
            padding: 0px 0px 24px 24px;
        }
`;

const SecondPack = styled.div`
    padding-left: 24px;
    &>div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        color: white;
        @media only screen and (min-width: 768px){
            margin-top: 0px;
        }
        &>div:nth-of-type(1){
            width: 42.7vw;
            height: 182px;
            background-color: #F6A560;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media only screen and (min-width: 768px){
                max-width: 20.18vw;
            }
            @media only screen and (min-width: 1440px){
                max-width: 11.38vw;
                margin: auto;
            }
                &>img{
                    margin-left: auto;
                    display: block;
                    padding: 24px 24px 0px 0px;
                }
                &>h2{
                    padding: 0px 0px 24px 24px;
                    font-size: 24px;
                    font-weight: 700;
                    margin-top: 0px;
                    margin-top: auto;
                    display: block;
                }
        }
        &>div:nth-of-type(2){
            width: 42.7vw;
            height: 182px;
            background-color: #F39E9E;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media only screen and (min-width: 768px){
                width: 20.18vw;
                margin-left: 23px;
            }
            @media only screen and (min-width: 1440px){
                max-width: 11.38vw;
                margin-left: 25px;
            }
            &>img{
                margin-left: auto;                 
                padding: 24px 24px 0px 0px;

            }
            &>h2{
                padding: 0px 0px 24px 24px;
                font-size: 24px;
                font-weight: 700;
            }
        }

    }
    &>div:nth-of-type(2){
            background-color: #EB7565;
            color: white;
            border-radius: 20px;
            max-width: 91.4vw;
            height: 158px;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 24px;
            @media only screen and (min-width: 768px){
               max-width: 43.35vw;
            }
            @media only screen and (min-width: 1440px){
                max-width: 24.58vw;
                margin: 0px;
                margin-top: 25px;
            }
            &>img{
                margin-left: auto;
                display: block;
                padding: 24px 24px 0px 0px;
            }
            &>h2{
                font-size: 24px;
                font-weight: 700;
                padding: 0px 0px 24px 24px;
            }
        }
`;

const ThirdPack = styled.div`
    color: white;
    font-size: 24px;
    font-weight: 700;
    @media only screen and (min-width: 1440px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &>div:nth-of-type(1){
        background-color: #61C4B7;
        border-radius: 20px;
        max-width: 91.4vw;
        height: 182px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 24px;
        @media only screen and (min-width: 768px){
           width: 43.35vw;
           margin: 24px 0px 0px 0px;
        }
        @media only screen and (min-width: 1440px){
            max-width: 24.58vw;
            margin: 0px;
        }
        &>img{
            display: block;
            margin-left: auto;
            padding: 24px 24px 0px 0px;
        }
        &>h2{
            padding: 0px 0px 24px 24px;
        }
    }
    &>div:nth-of-type(2){
        background-color: #552049;
        border-radius: 20px;
        max-width: 91.4vw;
        height: 182px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 24px;
        @media only screen and (min-width: 768px){
           width: 43.35vw;
           margin: 24px 0px 0px 0px;
        }
        @media only screen and (min-width: 1440px){
            max-width: 24.58vw;
            margin: 0px;
            height: 158px;
        }
        &>img{
            display: block;
            margin-left: auto;
            padding: 24px 24px 0px 0px;
        }
        &>h2{
            padding: 0px 0px 24px 24px;
        }
    }
`;