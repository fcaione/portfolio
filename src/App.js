import { Hero } from "./components/Hero"
import Nav from "./components/Nav"
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
}

export default App;