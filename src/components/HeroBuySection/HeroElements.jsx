import styled from "styled-components";



export const HeroBuyContainer = styled.div`
background: url(/assets/images/background.png);
    display: flex;
    padding: 10px 30px;
    height: 820px;
    position: relative;
    z-index: 1;
    margin-top: -104px;
    margin-right: auto;
    margin-left: auto;
    background-size:cover;

    @media (max-width: 480px){
        height: 950px;
        padding: 10px 0px;
        margin-top: -70px;
    }
`


export const HeroBg = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
    opacity: 0.09;
`
export const ImgBg = styled.image`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
export const HeroContent = styled.div`
    z-index: 3;
    position: relative;
    right: 250px;
    padding: 8px 65px;
    display: flex;
    top: 150px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 780px){
        padding: 8px 25px;
        top: 100px;
        right: auto!important;
    }
`
export const HeroH1 = styled.h1`
    color: #a71211;
    font-size: 60px;

    @media screen and (max-width: 768px){
        font-size: 32px;

    }
    @media screen and (max-width: 480px){
        font-size: 28px;    
    }
`

export const HeroP = styled.p`
    margin-top: 10px;
    color: white;
    font-size: 24px;
    max-width: 600px;
    font-weight: 300;

    @media screen and (max-width: 768px){
        font-size: 24px;

    }
    @media screen and (max-width: 480px){
        font-size: 18px;    
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
