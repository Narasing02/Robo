import taxiVideo from "../../assets/taxivid.mp4";
// import Navbar from "../Navbar/Navbar";
import "./Hero.css";
const Hero = () => {
  return (
    <>
     {/* <Navbar/> */}
    <div className="hero-main-container"> 
      <div className="hero-content-container">
        <h1>RobosCorp</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          exercitationem fuga nihil magnam cumque dolores quia molestiae, illo
          expedita quod illum explicabo voluptatibus, cum consectetur ad
          accusantium numquam at eligendi!
        </p>
        <div className="button-container">
            <button>Download</button>
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
