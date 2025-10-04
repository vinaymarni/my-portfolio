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
// import Background from './components/Background';

function App() {
  const {mode} = useAtomValue(data);
  return (
    <>
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
       
        <Header />
        <Banner />
        <TechStack />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
      </>
  );
}

export default App;
