import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useAtomValue } from 'jotai';
import { data } from './assets/data';

function App() {
  const {mode} = useAtomValue(data);
  return (
    <div style={{ background: mode === "light" ? "white" : "black" }} className="App">
      <Header />
      <Banner />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
