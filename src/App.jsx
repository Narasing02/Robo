// import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
// import GetApps from "./Components/GetApps/GetApps"
// import Hero from "./Components/Hero/Hero"
// import Services from "./Components/Services/Services"
// import WeSupport from "./Components/WeSupports/WeSupport"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import RoboscorpHome from "./Components/RoboscorpHome/RoboscorpHome";
import DocumentComp from "./Components/DocumentsComp/DocumentComp";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Contact from "./Components/ContactUS/ContactUS";
import Login from "./Components/Login/Login";
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="Navbar-hero">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/roboscorp" element={<RoboscorpHome />} />
        <Route exact path="/document" element={<DocumentComp />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/book-taxi" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
    // <Hero/>
    // <About/>

    // {/* <Services/> */}
    // <WeSupport/>
    // <GetApps/>
    // <Footer/>
  );
};

export default App;
