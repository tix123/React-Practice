import BusinessMap from '../../image/BusinessMap.jpg';
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { 
    SectionWarp,
    TextTitle,
    TextContainer,
    TextContent,
    PictureContainer,
    Picture
 } from './ContactElements'


const Contact = () => {
    return(
    <>
        <SectionWarp>

            <PictureContainer>
                <Picture src={BusinessMap}/>
            </PictureContainer>

            <TextContainer>
                <TextTitle>Contact</TextTitle>
                <TextContent>
                    <AiOutlineHome style={{ verticalAlign: 'middle', marginBottom: '1vw', fontSize: '3vw'}} /> 1301 16 Ave NW, Calgary, AB T2M 0L4<br/>
                    <br/>
                    <AiOutlinePhone style={{ verticalAlign: 'middle', marginBottom: '1vw', fontSize: '3vw'}}/> (403) 999-1234<br/>
                    <br/>
                    <AiOutlineMail style={{ verticalAlign: 'middle', marginBottom: '1vw', fontSize: '3vw'}}/> Contact@ABC-Company.ca<br/>
                    
                    
                </TextContent>
            </TextContainer>
             
        </SectionWarp>
    </>
    )
}

export default Contact;