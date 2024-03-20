import { Link } from 'react-router-dom'
import img1 from '../../assets/TRAVEL.jpg'
import './HomeService.css'
const HomeService = () => {
  return (
    <div className='Services-hero-section home-Services-hero-section'>
    <div className='Services-hero-section-content-div home-Services-hero-section-content-div  '>
        <h4>Our Services</h4>
        <h1 id='home-Services-hero-section-content-div-head'>Bike and Auto and Car Taxi Services</h1>
        {/* <div></div> */}
        <p>  For all of your travel needs, Bike and Auto Car Taxi Service provides dependable and easy-to-use transportation options. Our collection of bikes, vehicles, and automobiles is available for you to use whether you need a fast ride around town, a relaxing commute to work, or a hassle-free airport transport.</p>
        <div>
         <Link to="/services" ><button>Explore All</button></Link>  
        </div>
    </div>
    <div className='Services-hero-image-div'>
        <img src={img1} className='image' />
    </div>
</div>
  )
}

export default HomeService