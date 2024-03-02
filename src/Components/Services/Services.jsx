
import './Services.css'
import img1 from '../../assets/TRAVEL.jpg'
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { LuPackageX } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

import { HiOutlineCheckBadge } from "react-icons/hi2";


const Services = () => {
    const SerivesPackageData = [
        {
            logo: <RiEBike2Fill />,
            name: "Bike",
        },
        {
            logo: <RiEBike2Fill />,
            name: "Bike",
        },
        {
            logo: <RiEBike2Fill />,
            name: "Bike",
        },
        {
            logo: <RiEBike2Fill />,
            name: "Bike",
        },
        {
            logo: <RiEBike2Fill />,
            name: "Bike",
        },
        {
            logo: <RiEBike2Fill />,
            name: "Bike",
        },
    ]
  //  const Servicesdata = [
  //       {
  //           name: "Bike",
  //           para: "Card description with lots of great facts and interesting details.",
  //           img: ""

  //       },
  //       {
  //           name: "Auto",
  //           para: "Card description with lots of great facts and interesting detailsCard description with lots of great facts and interesting details.",
  //           img: "https://i.pinimg.com/564x/1d/f3/0c/1df30c6f3b566558563dfa78cefc18b9.jpg"

  //       },
  //       {
  //           name: "Car",
  //           para: "Card description with lots of great facts and interesting detailsCard description with lots of great facts and interesting details.",
  //           img: "https://i.pinimg.com/564x/da/c9/bd/dac9bd7c7190c9e38ebb1479cdaa815c.jpg"

  //       },
  //       {
  //           name: "Car",
  //           para: "Card description with lots of great facts and interesting details.",
  //           img: ""

  //       },
  //       {
  //           name: "Car",
  //           para: "Card description with lots of great facts and interesting details.",
  //           img: ""

  //       },
  //   ]
    const WhatWeDoData = [
        {
            img1: <BsFillTaxiFrontFill />,
            title1: "Taxi ",
            desc: " A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair"
        },
        {
            img1: <RiEBike2Fill />,
            title1: "Bike",
            desc: " A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair"
        },
        {
            img1: <LuPackageX />,
            title1: "Package ",
            desc: " A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair"
        },
        {
            img1: <RiCustomerService2Line />,
            title1: "Service",
            desc: " A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair"
        },
        {
            img1: <BsFillTaxiFrontFill />,
            title1: "Taxi ",
            desc: " A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair"
        },
        {
            img1: <BsFillTaxiFrontFill />,
            title1: "Taxi ",
            desc: " A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair"
        },

    ]
    return (
        <>
          
            <div className='Services-section-total-div'>
             
                <div className='Services-hero-section'>
                    <div className='Services-hero-section-content-div'>
                        <h4>Our Services</h4>
                        <h1>Quality Bike and Auto and Car Services in Fifth Avenue, NY</h1>
                        <div></div>
                        <p>A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair.</p>
                        <div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className='images'>
                        <img src={img1} className='image' />
                    </div>
                </div>

                <div className='Services-what-we-de-section-main-div'>
                    <div className='Services-head-main-div'>
                        <h1>What We Do</h1>
                    </div>
                    <div className='Services-what-we-de-section-cards-main-div'>
                        {WhatWeDoData.map((each) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className='Services-what-we-de-section-cards-div'>
                                    <div className='Services-what-we-de-section-cards-inner-div'>
                                        <div className='Services-what-we-de-section-cards-inner-div-inner-div'>
                                            <h1>{each.img1}</h1>
                                            <h3>{each.title1}</h3>
                                        </div>
                                        <div className='Services-what-we-de-section-cards-para-div'>
                                            <p>A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable car repair</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>

                <div className='Services-package-main-div'>
                    <div className='Services-package-single-card-content-head-div'>
                        <h1>Our Packages</h1>
                        <p>A template is a vector file that is used to help demonstrate the visual layout of a package, whether it is a folding carton or a countertop display box. These templates include lines for folding to demonstrate the proper layout of a package.</p>
                    </div>
                    <div className='Services-package-cards-main-div'>
                        {SerivesPackageData.map(() => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className='Services-package-single-card'>
                                    <div className='Services-package-single-card-content-div'>
                                        <h1><RiEBike2Fill /></h1>
                                        <h2>Bike</h2>
                                        <div className='Services-package-content-divs-div'>
                                            <div className='Services-package-content-div'>
                                                <h4><HiOutlineCheckBadge /> </h4>
                                                <h3>No Base Price</h3>
                                            </div>
                                            <div className='Services-package-content-div'>
                                                <h4><HiOutlineCheckBadge /> </h4>
                                                <h3>Low Price</h3>
                                            </div>
                                            <div className='Services-package-content-div'>
                                                <h4><HiOutlineCheckBadge /> </h4>
                                                <h3>High Profit</h3>
                                            </div>
                                            <div className='Services-package-content-div'>
                                                <h4><HiOutlineCheckBadge /> </h4>
                                                <h3>No Base Price</h3>
                                            </div>
                                        </div>
                                        <div className='Services-package-content-button-div'>
                                            <button>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>

        </>
    )
}

export default Services