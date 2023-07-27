import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import './App.css';
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Timeline/>
      <Projects />
    </div>
  );
}

export default App;
