import { BrowserRouter as HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import { useCollapse }  from 'react-collapsed'
import Home from '../components/Home/Home';
import Biography from '../components/Biography/Biography';
import Projects from '../components/Projects/Projects';
import NotFound from '../components/NotFound/NotFound';
import './App.css';
import '../styles/global.css';

const App = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        defaultExpanded: false,
        easing: "cubic-bezier(0.5, 0.5, 0.5, 0)",
        duration: 500,
    });

    return (
        <HashRouter basename='wolferado-portfolio/'>
            <nav>
                <div id='name-container'>
                    <h1>Wolferado</h1>
                    <span {...getToggleProps()} id='nav-menu-button' className="material-symbols-outlined">{isExpanded ? "close" : "menu"}</span>
                </div>

                <div id='main-link-container'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/biography'>Biography</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                </div>

                <div id='toggleable-link-container' {...getCollapseProps()}>
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/biography'>Biography</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                    </ul>
                </div>
            </nav>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/biography' element={<Biography />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;