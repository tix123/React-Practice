import styled from 'styled-components';

export const SectionWarp = styled.div`
display: flex;
background-color: #7f5539;
justify-content: space-between;
padding: 5vw;

@media screen and (max-width: 800px) { flex-direction: column-reverse; }
`;

export const TextContainer = styled.div`
width: 600px;
//align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 800px) { width: 100%; }
`;

export const TextTitle = styled.div`
color: #fff;
font-size: 3vw;
font-family: "Arial Black";
margin-bottom: 2vw;

@media screen and (max-width: 800px) { font-size: 4vh; margin-bottom: 2vh; }
`;

export const TextContent = styled.div`
color: #fff;
font-size: 2vw;

@media screen and (max-width: 800px) { font-size: 3vh; margin-bottom: 5vh; }

`;

export const PictureContainer = styled.div`
width: 600px;

@media screen and (max-width: 800px) { width: 100%; margin-bottom: 2vh; }
`;

export const Picture = styled.img`
width: 100%;
border-radius: 5vw;
`;

