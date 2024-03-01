import './Biography.css';
import ProfilePic from '../../materials/Aleksey Karelin 2 (cropped).jpg'

const Biography = () => {
    document.title = "Biography - Aleksey Karelin Portfolio";

    return (
        <img src={ProfilePic} alt='Profile_Picture' />
        
        
    )
}

export default Biography;