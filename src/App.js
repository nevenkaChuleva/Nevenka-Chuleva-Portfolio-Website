import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  return (
    <>
     <Navbar />  
     <Header />
     <About /> 
     <Projects />
     <Footer />
    </>
  );
}

export default App;
