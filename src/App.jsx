import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import ContactPage from "./Pages/Contact"
import PremiumGallery from "./Pages/Gallery"
import GoldCollection from "./Pages/GoldCollection"
import JadaauCollection from "./Pages/JadaauCollection"
import DiamondCollection from "./Pages/DiamondCollection"
import AntiqueJewelleryCollection from "./Pages/AntiqueJewelleryCollection"
import ItalianJewelleryCollection from "./Pages/ItallianJewelleryCollection"
import Documents from "./Pages/Documents"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/gallery" element={<PremiumGallery/>}/>
        <Route path="/collection/gold" element={<GoldCollection/>}/>
        <Route path="/collection/jadaau" element={<JadaauCollection/>}/>
        <Route path="/collection/diamond" element={<DiamondCollection/>}/>
        <Route path="/collection/antique" element={<AntiqueJewelleryCollection/>}/>
        <Route path="/collection/italian" element={<ItalianJewelleryCollection/>}/>
        <Route path="/documents" element={<Documents/>}/>
      </Routes>
      <Footer/>
      <FloatingButtons/>
    </>
  )
}

export default App;
