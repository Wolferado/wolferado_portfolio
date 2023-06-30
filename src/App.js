import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <div id='name-container'>
          <h1>Aleksey Karelin</h1>
          <h3>Wolferado</h3>
        </div>

        <div id='link-container'>
          <Link to='/'>Home</Link>
          <Link to='/about_me'>About Me</Link>
          <Link to='/Projects'>Projects</Link>
          <Link to='/Contacts'>Contacts</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about_me' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
