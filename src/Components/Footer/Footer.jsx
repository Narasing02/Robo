import './Footer.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare,FaYoutube ,FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
import roboLogo from '../../assets/robo-logo.png'
const Footer = () => {
  return (
    <div className='Footer-container'>
        <div className='footer-container-cards'>
            <div className='footer-company'>
                <h2>Company</h2>
                <p>RobosCorp app is owned and operated by Robo Fasttech Private Limited</p>
                <p>Blog</p>
                <p>Careers</p>
                <img src={roboLogo} alt=""/>
            </div>
            <div className='footer-information'>
                <h2>Information</h2>
                <p> <Link to="/terms" className='footer-link'>Terms & Conditions </Link></p>
                <p> <Link to="/privacy" className='footer-link'>Privacy Policy </Link></p>
                
            </div>

            <div className='footer-products'>
                <h2>Products</h2>
                <p>Ride</p>
                <p>Drive</p>
                <p><Link to="/" className='footer-link'>Home</Link></p>
                <p> <Link to="/about" className='footer-link'>About</Link></p>
            </div>

            <div className='footer-contactus'>
                <h2>Contact US</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@roboscorp.com.</p>
                <p>1-12/4/a, Sai Nagar, Kondapur, K.v.rangareddy, Serilingampally, Telangana, India,500084.</p>
                <p>+91-91334 99988</p>
                <p>support@roboscorp.com</p>
            </div>
            <div className='footer-followUS'>
                <h2>Follow US</h2>
                <hr/>
                <div className='footer-followUS-icons'>
                    <IoLogoWhatsapp className='footer-icon'/>
                    <FaFacebook className='footer-icon' />
                    < FaInstagramSquare className='footer-icon'/>
                    <FaYoutube  className='footer-icon'/>
                    <FaLinkedin  className='footer-icon'/>


                </div>
            </div>

            <div>

            </div>
        </div>
        <div className='copyright-container'>
            <hr/>
            <p>© Copy rights by RobosCorp 2023</p>

        </div>

    </div>
  )
}

export default Footer