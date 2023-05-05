import { FcCloseUpMode } from 'react-icons/fc';
// import { animateScroll as scroll } from 'react-scroll';

import {
    HeaderWarp,
    BusinessName,
    NavBar,
    NavItem,
    Brand,

} from './HeaderElements';

// const toTop = () => {
//     scroll.scrollToTop();
// };


const Header = () => {
    return (
        <HeaderWarp>
            <Brand to="top" smooth='true'>
                <FcCloseUpMode style={{ fontSize: '5vw' }} />
                <BusinessName>LOGISTICS COMPANY</BusinessName>
            </Brand>
            <NavBar>
                <NavItem to="top" smooth='true'>Home</NavItem>
                <NavItem to='about' smooth='true' offset={-document.documentElement.clientHeight * 0.1}>About</NavItem>
                <NavItem to='contact' smooth='true' offset={-document.documentElement.clientHeight * 0.1}>Contact</NavItem>
            </NavBar>
        </HeaderWarp>

    )
}

export default Header;