import  WelcomePicture from '../../image/WelcomePicture.jpg';

import { 
    BusinessTitle,
    BusinessSlogan,
    WelcomeWarp,
    WelcomeImage
} from './WelcomeElements';

//<img src={WelcomePicture} alt='WelcomePicture' width='100%'  />
//<WelcomeImage src={WelcomePicture}></WelcomeImage>

const Welcome = () => {
    return(
        <WelcomeWarp>
            <WelcomeImage src={WelcomePicture}></WelcomeImage>
            <BusinessTitle>ABC COMPANY</BusinessTitle>
            <BusinessSlogan>Your Gateway To The World</BusinessSlogan>
            
        </WelcomeWarp>
        
    )
};

export default Welcome;