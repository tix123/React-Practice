import  WelcomePicture from '../../image/WelcomePicture.jpg';
import  WelcomePictureMobile from '../../image/WelcomePictureMobile.jpg';

import { 
    BusinessTitle,
    BusinessSlogan,
    WelcomeWarp,
    WelcomeImage,
    WelcomeImageMobile
} from './WelcomeElements';

//<img src={WelcomePicture} alt='WelcomePicture' width='100%'  />
//<WelcomeImage src={WelcomePicture}></WelcomeImage>

/*
const WelcomeImage = () => {
    return(
        window.innerHeight < window.innerWidth ?
        <img src={WelcomePicture} alt='WelcomePicture' width='100%'  /> :
        <img src={WelcomePictureMobile} alt='WelcomePicture' width='100%'  />
    )
}
*/

const Welcome = () => {
    return(
        <WelcomeWarp>
            <WelcomeImage src={WelcomePicture}></WelcomeImage>
            <WelcomeImageMobile src={WelcomePictureMobile}></WelcomeImageMobile>
            <BusinessTitle>ABC COMPANY</BusinessTitle>
            <BusinessSlogan>Your Gateway To The World</BusinessSlogan>
            
        </WelcomeWarp>
        
    )
};

export default Welcome;