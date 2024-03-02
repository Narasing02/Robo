import './About.css'
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaTrafficLight,FaCar  } from "react-icons/fa";
import { RiEBikeFill } from "react-icons/ri";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
const About = () => {
  return (
    <div>
        <div className='about-header'>
            <h1>Our Safety Measures</h1>
            <hr/>
        </div>
      <div className="About-us-section-container">
        <div className='About-img-container'>
            <img src="https://roboscorp.com/static/media/roboride.538fc8507bd8197165d9.png" alt=""/>
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



          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            optio ea id non natus accusantium odit laudantium aliquam?
            Voluptates et dicta, rem earum totam delectus amet esse molestias
            natus. Similique? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Doloremque, nostrum molestias accusamus corporis
            quos similique labore doloribus rem repudiandae ipsa natus, ut
            tenetur aperiam consequatur. Dolorum aut sed recusandae voluptas.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
