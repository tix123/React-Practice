import AboutPicture from '../../image/AboutPicture.jpg';
import { 
    SectionWarp,
    TextTitle,
    TextContainer,
    TextContent,
    PictureContainer,
    Picture
 } from './AboutElements'


const About = () => {
    return(
    <>
        <SectionWarp>
            <TextContainer>
                <TextTitle>About ABC Company</TextTitle>
                <TextContent>ABC Company is global trading company who import and export variety product, such as foods, electronics, vehicles, etc. </TextContent>
            </TextContainer>
            
            <PictureContainer>
                <Picture src={AboutPicture}/>
            </PictureContainer>
             
        </SectionWarp>
    </>
    )
}

export default About;