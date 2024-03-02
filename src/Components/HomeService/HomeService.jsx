import { Link } from 'react-router-dom'
import img1 from '../../assets/TRAVEL.jpg'
import './HomeService.css'
const HomeService = () => {
  return (
    <div className='Services-hero-section'>
    <div className='Services-hero-section-content-div'>
        <h4>Our Services</h4>
        <h1>Quality Bike and Auto and Car Services in Fifth Avenue, NY</h1>
        <div></div>
        <p>A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair.</p>
        <div>
         <Link to="/book-taxi" ><button>Book Now</button></Link>  
        </div>
    </div>
    <div className='images'>
        <img src={img1} className='image' />
    </div>
</div>
  )
}

export default HomeService