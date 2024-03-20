import './About.css'
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaTrafficLight,FaCar  } from "react-icons/fa";
import { RiEBikeFill } from "react-icons/ri";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import roboTaxiImg from '../../assets/robo-logo.png'
const About = () => {
  return (
    <div>
        <div className='about-header'>
            <h1>Our Safety Measures</h1>
            <hr/>
        </div>
      <div className="About-us-section-container">
        <div className='About-img-container'>
            <img src={roboTaxiImg} alt=""/>
        </div>
        <div className='safety-measurements-card-container'>
            <div className='safety-measurements-card'>
            <MdOutlineAirlineSeatReclineNormal className='seat-belt-icon'/>
            <p> a seat belt while driving</p>

            </div>
            <div className='safety-measurements-card'>
            <FaTrafficLight  className='seat-belt-icon'/>
            <p>  Don’t break a traffic signal</p>

            </div>
            <div className='safety-measurements-card'>
            <FaCar  className='seat-belt-icon'/>
            <p> vehicle in good condition</p>

            </div>
            <div className='safety-measurements-card'>
            <RiEBikeFill className='seat-belt-icon'/>
            <p> vehicle in good condition</p>

            </div>
            <div className='safety-measurements-card'>
            <GiFullMotorcycleHelmet className='seat-belt-icon'/>
            <p> Wear helmet while driving</p>

            </div>



      
        </div>
      </div>
    </div>
  );
};

export default About;
