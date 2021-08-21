import { SiDatadog } from 'react-icons/si';
import {
    HeaderWarp,
    Brand,
    PageName
} from './HeaderElements';

const Header = () => {

    return (
        
            <HeaderWarp>
                <SiDatadog style={{
                            color: '#fff',
                            fontSize: '30px',
                        }} />
                <Brand>BOSTON BAY HOTEL</Brand>
                <PageName>Home About Careers Contact</PageName>
            </HeaderWarp>
        
    )
}

export default Header;