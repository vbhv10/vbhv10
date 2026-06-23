import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-transparent">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
