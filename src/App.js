import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import './App.css';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certificates from "./components/Certificates/Certificates";
import { themeContext } from './Context'
import { useContext } from "react"

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Timeline />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
