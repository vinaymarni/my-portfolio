import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
