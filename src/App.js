//Styles
import { GlobalStyle } from "./GlobalStyle";
//Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Tours from "./components/Tours";
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
      <Tours/>
      <NextAdventure/>
      <Reviews/>
      <Contact/>
    </div>
  );
}

export default App;
