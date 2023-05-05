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
    return (
        <>
            <SectionWarp id='about' name='about'>
                <TextContainer>
                    <TextTitle>About</TextTitle>
                    <TextContent>
                        A logistics company is a business that specializes in managing the transportation,
                        storage, and distribution of goods and materials. These companies play a critical
                        role in the global economy, as they ensure that goods are delivered to their
                        intended destinations in a timely and efficient manner.
                    </TextContent>
                </TextContainer>

                <PictureContainer>
                    <Picture src={AboutPicture} />
                </PictureContainer>

            </SectionWarp>
        </>
    )
}

export default About;