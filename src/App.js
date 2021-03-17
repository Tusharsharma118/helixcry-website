import Navbar from './components/navbar'
import About from './components/about'
import Hero from './components/hero';
import Explore from './components/explore'
import Clock from './components/Clock'
import Contact from './components/contact'
import Forte from './components/forte'
import Snake from './components/snake'
import Footer from './components/footer'
import './styles/Global.css'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Forte/>
      <Clock/>
      <Explore/>
      <Snake/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;