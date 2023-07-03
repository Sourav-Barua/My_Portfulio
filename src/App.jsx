import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Skill from './Components/Skills/Skill'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Banner/>
      <About/>
      <Skill></Skill>
      <Portfolio/>
      <Contact/>
      <Footer>  </Footer>
    </>
  )
}

export default App
