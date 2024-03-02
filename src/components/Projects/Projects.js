import './Projects.css';
import IAA_group_project from '../../materials/IAA_Kursa_darbs.png';
import ScandiWeb_assignment from '../../materials/Junior_Web_Developer_Assignment.png';
import Physics_calculator from '../../materials/Physics-calculator.jpg';
import Unity_Game from '../../materials/Unity_Showcase.png';
import Wolferado_GitHub from '../../materials/Wolferado.png';
import LinkedIn from '../../materials/LinkedIn.png';
import Board from './Board';

const Projects = () => {
    document.title = "Projects - Aleksey Karelin Portfolio";

    return (
        <div id='projects'>
            <Board image={IAA_group_project} altText="IAA_Group_Project_Social_Preview" name="Image Quality Evaluation App" desc="Application (Source code)" onClick={() => window.open("https://github.com/Wolferado/IAA_Kursa_darbs", "_blank")}/>
            <Board image={ScandiWeb_assignment} altText="ScandiWeb_Junior_Web_Developer_Social_Preview" name="Junior Web Developer Assignment" desc="Website (Source code)" onClick={() => window.open("https://github.com/Wolferado/ScandiWeb-Assignment", "_blank")}/>
            <Board image={Physics_calculator} altText="Physics_Calculator_Social_Preview" name="Physics Calculator" desc="Webpage (Source code & Webpage)" onClick={() => window.open("https://github.com/Wolferado/physics-calculator", "_blank")}/>
            <Board image={Unity_Game} altText="Krastunda_Expedition_Showcase_Thumbnail" name='Unity Game "Krastunda Expedition"' desc="Game (Video showcase)" onClick={() => window.open("https://youtu.be/8T3rPCWFpBM", "_blank")} />
            <Board image={Wolferado_GitHub} altText="Github_Social_Preview" name="All other projects are available here" desc="GitHub (Profile)" onClick={() => window.open("https://github.com/Wolferado", "_blank")} />
            <Board image={LinkedIn} altText="LinkedIn_Preview" name="Stay connected here" desc="LinkedIn (Profile)" onClick={() => window.open("https://www.linkedin.com/in/karelin-aleksey/", "_blank")} />
        </div>
    );
}



export default Projects;