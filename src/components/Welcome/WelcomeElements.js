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
top: 25vw;
//left: 15%;
//margin-top: 25vw;
color: #000;
font-size: 8vw;
font-family: "Arial Black";
`;

export const BusinessSlogan = styled.div`
position: absolute;
top: 35vw;
//left: 15%;
//margin-top: 1vw;
color: #000;
font-size: 4vw;
`;

export const WelcomeImage = styled.img`
width: 100%;
`;
