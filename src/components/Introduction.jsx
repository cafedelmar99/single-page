import React from 'react'
import styled from 'styled-components'
import amy from '../assets/image-amy.webp'

const Introduction = () =>{
    return(
        <IntroductionHolder>
            <MainPhoto>
                <img src={amy} alt="amy"/>
            </MainPhoto>
            <DescriptionHolder>
                <h3>
                I’m Amy, and I’d love to work 
                on your next project 
                </h3>
                <p>
                I love working with others to 
                create beautiful design 
                solutions. I’ve designed 
                everything from brand illustrations 
                to complete mobile apps. 
                I’m also handy with a camera! 
                </p>
                <button>Free Consultation</button>
            </DescriptionHolder>
        </IntroductionHolder>
    )
}

export default Introduction;

const IntroductionHolder = styled.div`
    @media only screen and (min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 120px;
    }
`;

const MainPhoto = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0px 40px 0px;
    @media only screen and (min-width: 768px){
        margin: 0px;
    }
    &>img{
        width: 300px;
        height: 300px;
        @media only screen and (min-width: 768px){
            width: 364px;
            height: 364px;
            position: relative;
            right: 80px;
        }
        @media only screen and (min-width: 1440px){
            width: 445px;
            height: 445px;
            position: initial;
        }
    }
`;

const DescriptionHolder = styled.div`
    text-align: center;
    margin-left: 125px;
    @media only screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: left;   
    }
    &>h3{
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 24px;
        @media only screen and (min-width: 768px){
            font-size: 32px;
            font-weight: 700;
            line-height: 40px;
            text-align: left;
        }
    }
    &>p{
        font-size: 16px;
        font-weight: 500;
        @media only screen and (min-width: 768px){
            font-size: 18px;
            line-height: 28px;
            text-align: left;
        }
    }
    &>button{
        width: 176px;
        height: 44px;
        background-color: #EB7565;
        color: white;
        border-radius: 20px;
        border: none;
        margin-top: 24px;
        @media only screen and (min-width: 768px){
            font-size: 16px;
            width: 228px;
            height: 56px;
        }
        &:hover{
            background-color: #F6A560;
        }
    }
`;
