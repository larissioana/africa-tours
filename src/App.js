//Styles
import { GlobalStyle } from "./GlobalStyle";
//Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Destinations from "./components/Destinations";
import ToursSection from "./components/ToursSection";
import NextAdventure from "./components/NextAdventure";
import Reviews from "./components/Reviews";
import Contact from './components/Contact';
function App() {
  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <GlobalStyle/>
      <Nav/>
      <Footer/>
      <Home/>
      <About/>
      <Destinations/>
      <ToursSection/>
      <NextAdventure/>
      <Reviews/>
      <Contact/>
    </div>
  );
}

export default App;
