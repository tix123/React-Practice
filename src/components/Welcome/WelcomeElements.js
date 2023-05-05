import styled from 'styled-components';
import backgroundPicture from '../../image/WelcomePicture.jpg';

export const WelcomeWarp = styled.div`
/*
background-image: url(${backgroundPicture});
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
height: 700px;
max-height: 1000px;
*/
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

export const BusinessTitle = styled.div`
position: absolute;
top: 20vw;
//left: 15%;
//margin-top: 25vw;
color: #000;
font-size: 7vw;
font-family: "Arial Black";

@media screen and (max-width: 800px) { font-size: 7vh; top: 25vh; text-align: center}
`;

export const BusinessSlogan = styled.div`
position: absolute;
top: 35vw;
//left: 15%;
//margin-top: 1vw;
color: #000;
font-size: 4vw;
font-weight: bold;

@media screen and (max-width: 800px) { font-size: 4vh; top: 50vh; text-align: center}
`;

export const WelcomeImage = styled.img`
width: 100%;

@media screen and (max-width: 800px) { display: none; }
`;

export const WelcomeImageMobile = styled.img`
width: 100%;
@media screen and (min-width: 801px) { display: none; }
`;
