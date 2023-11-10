
import './App.css';
import Contact from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import Intro from './Components/intro/intro';
import Navbar from './Components/navbar';
import Skills from './Components/skills/skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
