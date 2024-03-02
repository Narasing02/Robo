import './WeSupport.css'
import taxi from '../../assets/3d-fluency-taxi.png'
import bike from '../../assets/3d-business-woman-and-man-on-a-moped.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import auto from '../../assets/auto.jpg'
const WeSupport = () => {
  return (
    <div>
        <div className='we-support-header'>
            <h2>We Support</h2>
            <hr/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore, architecto ratione, ea laborum eius nesciunt dolorem ex impedit temporibus nam officiis deserunt ducimus voluptatum nostrum saepe numquam eveniet libero?</p>
                </div>
        </div>
        <div className='we-support-cards-container'>
            <div className='weSupport-card'>
                <img src={taxi} alt="taxi"/>
                <p>Car</p>
                <Link to="/document" className='link-nav'>  <button>Documents  < FaLongArrowAltRight  className='we-support-icon'/> </button></Link>

            </div>
            <div className='weSupport-card'>
                <img src={bike} alt="taxi"/>
                <p>Bike</p>
            <Link to="/document" className='link-nav'>  <button>Documents  < FaLongArrowAltRight  className='we-support-icon'/> </button></Link>

            </div>
            <div className='weSupport-card'>
                <img src="https://i.pinimg.com/564x/a2/ab/30/a2ab30d248c02b938699352950390a91.jpg" alt="taxi"/>
                <p>Auto</p>
                <Link to="/document" className='link-nav'><button>Documents  < FaLongArrowAltRight  className='we-support-icon'/> </button></Link>

            </div>
        </div>
    </div>
  )
}

export default WeSupport