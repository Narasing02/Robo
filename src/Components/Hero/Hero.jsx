/* eslint-disable react/no-unescaped-entities */
import taxiVideo from "../../assets/taxivid.mp4";
// import Navbar from "../Navbar/Navbar";
import "./Hero.css";
const Hero = () => {



const openPlayStore = () => {
    // Replace 'your-app-id' with the actual app ID or package name of your app in the Play Store
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.roboscorp.user';
    
    window.open(playStoreUrl, '_blank');
  };


  return (
    <>
     {/* <Navbar/> */}
    <div className="hero-main-container"> 
      <div className="hero-content-container">
        <h1>RobosCorp</h1>
        <p>
        we're excited to announce our comprehensive transportation solutions tailored specifically for the Roboscorp platform. Whether you're in need of a car, bike, or auto taxi, we've got you covered for all your travel requirements within the Roboscorp ecosystem.
        </p>
        <div className="button-container">
            <button onClick={openPlayStore}>Download</button>
            <button>Book A Ride </button>
        </div>
      </div>
      <div className="video-container">
        <video src={taxiVideo} autoPlay muted loop></video>
      </div>
    </div>
    </>
  );
};

export default Hero;
