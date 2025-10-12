import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useAtomValue } from 'jotai';
import { data } from './assets/data';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
// import Background from './components/Background';

function App() {
  const {mode} = useAtomValue(data);
  return (
    <>
      <Header />
      {mode === "digital" &&
        <video
          src="/videoplayback.mp4"
          muted
          className="BackgroundVideo"
          autoPlay
          loop
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}

        />
      }
      <div 
        style={{ background: mode === "light" ? "white" : mode === "dark" ? "black" : "transparent" }} 
        className="App"
      >
        {/* <Background /> */}
        <Banner />
        <TechStack />
        <Projects />
        <About />
        <Education />
        <Experience/>
        <Contact />
        <Footer />
      </div>
      </>
  );
}

export default App;
