import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'


const Footer = () => {
    return(
        <FooterHolder>
            <EndingText>
                <div>
                <h4>Book a call with me</h4>
                <p>I’d love to have a chat to 
                see how I can help you. The best first 
                step is for us to discuss your project 
                during a free consultation. Then 
                we can move forward from there.</p>
                </div>
                <ConsultButton>
                    Free Consultation
                </ConsultButton>
            </EndingText>
            <BottomRow>
                <img src={logo} alt="logo"/>
                <button>Free Consultation</button>
            </BottomRow>
        </FooterHolder>
    )
}

export default Footer;

const FooterHolder = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const EndingText = styled.div`
    width: 91.5vw;
    height: 352px;
    background-color: black;
    text-align: center;
    border-radius: 20px;
    margin-top: 100px;
    @media only screen and (min-width: 768px){
        width: 89.85vw;   
    }
    @media only screen and (min-width:1440px){
        display: flex;
        justify-content: space-between;
        max-width: 77vw;
        text-align: left;
        align-items: center;
    }
    &>div{
        &>h4{
            font-size: 26px;
            font-weight: 700;
            padding: 50px 50px 24px 50px;
            @media only screen and (min-width: 768px){
                font-size: 32px;
                padding-top: 54px;
            }
            @media only screen and (min-width:1440px){
                padding: 0px 0px 25px 65px;
            }
        }
        &>p{
            font-size: 16px;
            font-weight: 500;
            padding: 0px 24px 24px 24px;
            line-height: 26px;
            @media only screen and (min-width: 768px){
                font-size: 18px;
                padding: 0px 75px 26px 75px;
            }
            @media only screen and (min-width:1440px){
                padding: 0px 0px 0px 65px;
                max-width: 540px;
            }
        }
    }
`;

const ConsultButton = styled.button`
    color: white;
    font-size: 14px;
    font-weight: 700;
    width: 176px;
    height: 44px;
    background-color: #EB7565;
    border-radius: 20px;
    border: none;
    @media only screen and (min-width: 768px){
        font-size: 16px;
        width: 228px;
        height: 56px;
    }
    @media only screen and (min-width:1440px){
        margin: 0px 6.6vw 0px 0px;
    }
    &:hover {
        background-color: #F6A560;
    }
`;

const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    &>img{
        width: 48px;
        height: 48px;
    }
    &>button{
        width: 176px;
        height: 44px;
        border-radius: 20px;
        background-color: black;
        color: white;
        @media only screen and (min-width: 768px){
            font-size: 16px;
            width: 228px;
            height: 56px;
        }
        &:hover {
            background-color: #755CDE;
        }
    }
`;