import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import ContactPage from "./Pages/Contact"
import PremiumGallery from "./Pages/Gallery"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/gallery" element={<PremiumGallery/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
