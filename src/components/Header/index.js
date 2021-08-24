import { FcCloseUpMode } from 'react-icons/fc';
import { animateScroll as scroll } from 'react-scroll';
import {
    HeaderWarp,
    BusinessName,
    NavBar,
    NavItem,
    Brand
} from './HeaderElements';

const toTop = () => {
    scroll.scrollToTop();
  };

const Header = () => {
    return (
            <HeaderWarp>
                <Brand onClick={toTop}>
                    <FcCloseUpMode style={{ fontSize: '5vw' }} />
                    <BusinessName>ABC COMPANY</BusinessName>
                </Brand>
                <NavBar>
                    <NavItem onClick={toTop}>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
               </NavBar>
            </HeaderWarp>
        
    )
}

export default Header;