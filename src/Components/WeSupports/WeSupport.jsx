/* eslint-disable react/no-unescaped-entities */
import './WeSupport.css'
import taxi from '../../assets/3d-fluency-taxi.png'
import bike from '../../assets/3d-business-woman-and-man-on-a-moped.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import auto from '../../assets/auto.jpg'
import auto from '../../assets/documents-auto.jpg'
const WeSupport = () => {
  return (
    <div>
        <div className='we-support-header'>
            <h2>We Support</h2>
            <hr/>
            <div>
                <p>We are pleased to provide our all-inclusive transportation options designed especially for the Roboscorp system. We have  covered for all of your transport needs inside the Roboscorp ecosystem, whether you need a vehicle, bike, or auto cab. Car Bike Auto Taxi Services, we're committed to providing exceptional transportation solutions that enhance your commute experience. Sit back, relax, and let us take you where you need to go within the Roboscorp world.</p>
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
                <img src={auto}  alt="taxi"/>
                <p>Auto</p>
                <Link to="/document" className='link-nav'><button>Documents  < FaLongArrowAltRight  className='we-support-icon'/> </button></Link>

            </div>
        </div>
    </div>
  )
}

export default WeSupport