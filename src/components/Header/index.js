import { FcCloseUpMode } from 'react-icons/fc';
import {
    HeaderWarp,
    BusinessName,
    NavBar,
    NavItem,
    Brand
} from './HeaderElements';

const Header = () => {

    return (
        
            <HeaderWarp>
                <Brand>
                    <FcCloseUpMode style={{ color: '#fff', fontSize: '50px' }} />
                    <BusinessName>ABC COMPANY</BusinessName>
                </Brand>
                <NavBar>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
               </NavBar>
            </HeaderWarp>
        
    )
}

export default Header;