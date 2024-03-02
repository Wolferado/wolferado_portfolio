import styles from './Biography.css';
import ProfilePic from '../../materials/Aleksey Karelin 2 (cropped).jpg'
import Section from './Section';

const Biography = () => {
    const age = Math.abs(new Date(Date.now() - new Date("06/11/2001")).getUTCFullYear() - 1970);

    document.title = "Biography - Aleksey Karelin Portfolio";

    return (
        <div id='bio'>
            <img className={styles.img} src={ProfilePic} alt='Profile_Picture' />
            
            <div className='section'>
                <h1>Aleksey Karelin</h1>
                <h2>Born: November 6th 2001 (currently {age} years)</h2>
                <h2>Occupation: Latvia, Riga, LV-1035</h2>
            </div>

            <Section title = "Achievements" element = {
                <ul>
                    <li><h2>Qualified as one of the team finalists for HeatlhTech pre-acceleration programme 2022<sup><a href='https://jalatvia.lv/bnews/global/973#:~:text=TrioDigitalo%20%C2%A0%E2%80%93%C2%A0%20M%C4%81r%C4%ABte%20Balgalve%2C%20R%C4%ABgas%20Stradi%C5%86a%20universit%C4%81te%2C%20Antra%20%C5%A0nikvalde%2C%20Banku%20augstskola%2C%20Aleksejs%20Kare%C4%BCins%2C%20R%C4%ABgas%20Tehnisk%C4%81%20universit%C4%81te.'>Link</a></sup> in Latvia;</h2></li>
                    <li><h2>Participated in multiple hackathons that were organized by “The Racoons” and Latvian universities;</h2></li>
                    <li><h2>Managed 2 projects in 2020 that received Baltic Regional Fund’s funding and guidance.</h2></li>
                </ul>
            } />

            <Section title = "Work Experience" element = {
                <ul>
                    <li><h2>MSC Shared Service Center Riga - Business Data Processing Intern <br /><i>(July 2023 - October 2023)</i></h2></li>
                    <br />
                    <ul>
                        <li><h3>Created, analyzed and renewed SQL codes;</h3></li>
                        <li><h3>Processed Contract Lists with Excel;</h3></li>
                        <li><h3>Monitored tariffs and exceptions, modified them according to the requirements and requests;</h3></li>
                        <li><h3>Processed clients’ requests via e-mail and specialized platforms inside MSC;</h3></li>
                        <li><h3>Created Power Automate flows to simplify work and increase productivity.</h3></li>
                    </ul>
                </ul>
            } />

            <Section title = "Education" element = {
                <ul>
                    <li><h2>Riga Technical University - DITEF Faculty Student <br /><i>(September 2021 - Present)</i></h2></li>
                    <li><h2>J. G. Herdera Rīgas Grīziņkalna vidusskola - Student <br /> <i>(September 2009 - May 2021)</i></h2></li>
                </ul>
            } />

            <Section title = "Additional Education" element = {
                <ul>
                    <li><h2>Accenture - Microsoft .NET Bootcamp <br /><i>(July 2021 - August 2021, 160 hours)</i></h2></li>
                    <li><h2>European Coding School Datorium - “WebTech with HTML/CSS/JS” course <br /> <i>(June 2020 - September 2020, 36 hours)</i></h2></li>
                    <li><h2>European Coding School Datorium - “Coding Apps with C#” course <br /> <i>(April 2020 - September 2020, 48 hours)</i></h2></li>
                    <li><h2>Rīgas Domes Labklājības Departaments - “Vienaudzis-vienaudzim” course <br /><i>(April 2019 – July 2019, 20 hours)</i></h2></li>
                </ul>
            } />

            <Section title = "Language Skills" element = {
                <ul>
                    <li><h2>Latvian - Upper-Intermediate</h2></li>
                    <li><h2>English - Advanced</h2></li>
                    <li><h2>Russian - Native</h2></li>
                    <li><h2>German - Elementary</h2></li>
                </ul>
            } />
        </div>
    )
}

export default Biography;