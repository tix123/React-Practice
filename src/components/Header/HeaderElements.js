import styled from 'styled-components';
import { Link } from 'react-scroll';


export const HeaderWarp = styled.div`
background: #000;
display: flex;
height: 5vw;
margin: 0px;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 1;

@media screen and (max-width: 800px) { height: 5vh; }

`;

export const Brand = styled(Link)`
display: flex;
align-items: center;
margin-left: 3vw;
cursor: pointer;
`;

export const BusinessName = styled.div`
font-family: "Arial Black";
font-size: 2vw;
color: #fff;
margin-left: 1vw;

@media screen and (max-width: 800px) { font-size: 2vh; }
`;

export const NavBar = styled.div`
color: #fff;
display: flex;
margin-right: 3vw;
weight: 50%;
`;

export const NavItem = styled(Link)`
font-size: 2vw;
margin-right: 2vw;
cursor: pointer;

@media screen and (max-width: 800px) { font-size: 2vh; }
`;


