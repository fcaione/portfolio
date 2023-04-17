import { Hero } from "./components/Hero"
import Nav from "./components/Nav"
import Skills from "./components/Skills"
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;