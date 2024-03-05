import { useState } from 'react'
import './App.css'
import Header, {HeaderButton} from './components/Header'
import './components/header.css'
import Home from './components/Home'
import './components/home.css'
import './components/animation.css'
import Work from './components/Work'
import './components/work.css'
import Timeline from './components/Timeline'
import './components/timeline.css'
import Services from './components/Services'
import './components/services.css'
import Testimonial from './components/Testimonial'
import './components/testimonial.css'
import Contact from './components/Contact'
import './components/contact.css'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer';
import "./components/footer.css";
import './components/mediaquery.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <>
    <HeaderButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Home />
     <Work />
     <Timeline />
     <Services />
     <Testimonial />
     <Contact />
     <Footer />
     <Toaster />
  
    </>
  )
}

export default App
