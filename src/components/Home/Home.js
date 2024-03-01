import './Home.css';
import '../../styles/global.css';
import Card from './Card';
import CardData from '../../materials/card_descriptions.json'
import ProfilePic from '../../materials/Aleksey Karelin 2 (cropped).jpg'
import FrontEndCardPic from '../../materials/VS_Code_FrontEnd_Perspective.png'
import BackEndCardPic from '../../materials/Back-End_Showcase_Perspective.png'
import UnityCardPic from '../../materials/Unity_Game_Showcase_Perspective.png'
import BlenderCardPic from '../../materials/Blender_Showcase_Perspective.png'
import AdobeCardPic from '../../materials/Adobe_Showcase.png'

const Home = () => {
    document.title = "Home - Aleksey Karelin Portfolio";

    return(
        <>
            <div id='header'>
                <img src={ProfilePic} alt='Profile_Picture'/> 
                <h1>Aleksey Karelin</h1>
                <h2>Portfolio</h2>
            </div>

            <div id='introduction'>
                <h1>Welcome to my portfolio!</h1>
                <p>Hello there. </p>
                <p>First of all, my name is Aleksey <sup> (as seen above) </sup> and this is my portfolio. </p>
                <p>Here you will be able to find following information:
                <ul>
                    <li>My interests and skills;</li>
                    <li>My own biography straight from my CV; <sup>(but detalized, it is impossible to fit everything in one Word document)</sup></li>
                    <li>Projects that I have created.</li>
                </ul>
                </p>
                <p>Feel free to discover and read!</p>
            </div>

            <div id='interests-and-skills'>
                <h1>Interests & Skills</h1>
                <Card cardImage={FrontEndCardPic} altText='VS_Code_Editor_Picture' cardName='Front-End Development' cardText={CardData["Front-End Development"]} />
                <Card cardImage={BackEndCardPic} altText='Application_Software_Picture' cardName='Application & Back-End Development' cardText={CardData["App and Back-End Development"]} />
                <Card cardImage={UnityCardPic} altText='Game_Development_Picture' cardName='Unity Game Development' cardText={CardData["Unity Game Development"]} />
                <Card cardImage={BlenderCardPic} altText='Blender_Picture' cardName='Modelling in Blender & Animation' cardText={CardData["Blender Modelling"]} />
                <Card cardImage={AdobeCardPic} altText='Adobe_Picture' cardName='Photo & Video Editing' cardText={CardData["Editing"]} />
            </div>

            <footer>
                TODO: Later
            </footer>
        </>
    );
}

export default Home;