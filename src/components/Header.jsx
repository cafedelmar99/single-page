import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'


const Header = () => {
  return (
    <>
      <HeaderHolder>
        <Logo src={logo}/>
        <ConsultationButton>Free Consultation</ConsultationButton>
      </HeaderHolder>
      <TextHolder>
        <HeadingText>Design Solutions Made Easy</HeadingText>
        <HeadingDescription>With over ten years of experience in various
         design disciplines, I’m your one-stop shop for your design needs.
         </HeadingDescription>
      </TextHolder>
    </>
  )
}
export default Header;

const HeaderHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
  transform: scale(0.75);
`;

const ConsultationButton = styled.button`
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
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 32px 0px 32px 0px;
  @media only screen and (min-width: 768px) {
    margin: 64px 0px 64px 0px;
  }
`;

const HeadingText = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 27px;
  @media only screen and (min-width: 768px) {
    font-size: 44px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 56px;
  }
`;

const HeadingDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  width: 75vw;  
  max-width: 750px;
  @media only screen and (min-width: 768px){
    font-size: 18px;
  }
`;