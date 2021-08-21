import styled from 'styled-components';

const headerBG = "#000";
const brandColor = "#fff";
const NavBarColor = "#fff";

export const HeaderWarp = styled.div`
background: ${headerBG};
padding: 0 0 0 10px;
display: flex;
height: 10vh;
margin: 0px;
align-items: center;
width: 100%;
justify-content: space-between;
`;

export const Brand = styled.div`
display: flex;
align-items: center;
margin-left: 3rem;
`;

export const BusinessName = styled.div`
font-family: "Arial Black";
font-size: 25px;
color: ${brandColor};
margin-left: 1rem;

`;

export const NavBar = styled.div`
color: ${NavBarColor};
display: flex;
margin-right: 3rem;
weight: 50%;
`;

export const NavItem = styled.div`
font-size: 20px;
margin-right: 2rem;
`;

