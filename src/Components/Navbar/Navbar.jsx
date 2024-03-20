import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import robologo from '../../assets/robo-logo.png'

const Navbar = () => {

    const [Click, SetClick] = useState(false)
    const handleClick = () => {
        SetClick(!Click)
    }
    return (
        <nav className="">
            <div className='Logo'>
                <Link to="/" className='Link'><img src={robologo} className='Navbar-logo-image' /></Link>
            </div>
            <div className={Click ? "Menu active" : "Menu"}>
                <Link to="/" className='Link'>Home</Link>
                <Link to="/about" className='Link'>About</Link>

                <Link to="/Services" className='Link'>Services</Link>
                {/* <Link to="/TaxiPackages" className='Link'>Taxi Packages</Link> */}
                <Link to="/contact-us" className='Link'>Contact</Link>
                {/* <Link to="/book-taxi" className='Link'>Book Taxi</Link> */}

            </div>

            <div className='hamburger' onClick={handleClick}>

                {
                    Click ? <FaTimes style={{ color: "yellow" }} size={25} /> : <FaBars style={{ color: "black" }} size={25} />
                }
            </div>
        </nav>
    )
}

export default Navbar