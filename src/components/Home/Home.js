import './Home.css';
import '../../styles/global.css';

const Home = () => {
    return(
        <>
            <div id="section-heading">
                <h1>Programming temporary, suffering eternal.</h1>
            </div>

            <div id="quote-explanation">
                <p>
                    I came up with this quote during the time I played the videogame "DOOM Eternal" by <a href='https://www.idsoftware.com/'>id Software.</a> <br />
                    A lot of players joked about DOOM being truly Eternal (because, it kinda is), by using the simple quote template: <br />
                    
                    <br />

                    <b>Something</b> is temporary, but DOOM is Eternal. <br />

                    <br />

                    I liked it that much, because it portrayed some simple idea and was used in memes that made me laugh. <br />
                    So, as a result, I transformed it to something that would be relatable and quickly understandable. <br />

                    <br />

                    <i>P. S. Suffering isn't caused by only programming, but also testing, debugging, living. But, in all seriousness, that's a joke, lads.</i> <br/>

                    <br />

                    &copy; Wolferado
                </p>
            </div>

            <div id="about-portfolio">
                <h1>Why am I here, you may ask?</h1>

                <h2>This is my online portfolio that contains:</h2>

                <ul>
                    <li>Information about me</li>
                    <li>Projects that I have made</li>
                    <li>The ways how you can contact me</li>
                </ul>
            </div>
        </>
    );
}

export default Home;