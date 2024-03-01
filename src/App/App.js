import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from '../components/Home/Home';
import Biography from '../components/Biography/Biography';
import Projects from '../components/Projects/Projects';
import NotFound from '../components/NotFound/NotFound';
import './App.css';
import '../styles/global.css';

const App = () => {
    return (
        <Router>
            <nav>
                <div id='name-container'>
                    <h1>Wolferado</h1>
                </div>
        
                <div id='link-container'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/biography'>Biography</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                </div>
            </nav>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/biography' element={<Biography />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;