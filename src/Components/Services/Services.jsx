import "./Services.css";
import img1 from "../../assets/TRAVEL.jpg";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { LuPackageX } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FcBusinesswoman } from "react-icons/fc";

import { HiOutlineCheckBadge } from "react-icons/hi2";
import rikshaw from '../../assets/rickshaw.png'

const Services = () => {
  const SerivesPackageData = [
    {
      logo: <RiEBike2Fill />,
      name: "Bike",
    },
    {
      logo: <BsFillTaxiFrontFill/>,
      name: "Car",
    },
    {
      logo:<img src={rikshaw} alt="rikshaw" className="auto-rikshaw"/>,
      name: "Auto",
    },
    {
      logo: <GiPoliceOfficerHead />,
      name: "Driver",
    },
    {
      logo: < FcBusinesswoman />,
      name: "Lady Driver",
    },
    // {
    //   logo: <RiEBike2Fill />,
    //   name: "Bike",
    // },
  ];
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
      desc: "Our car taxi offers convenient and comfortable transportation for individuals looking to navigate urban areas or travel between destinations.  Booking a car taxi is quick and effortless, often done through a mobile app . Safety is our first parameter .",
    },
    {
      img1: <RiEBike2Fill />,
      title1: "Bike",
      desc: " A bike taxi provides agile and efficient transportation for short-distance travel within urban settings. With its nimble design and eco-friendly operation, bike taxis offer a unique and convenient way to navigate through traffic and reach your destination swiftly. ",
    },
    {
      img1: <LuPackageX />,
      title1: "Package ",
      desc: " Our fare packages provide passengers with a reliable, convenient, and cost-effective transportation option, making them a preferred choice for travelers seeking flexibility and value for money in their journeys",
    },
    {
      img1: <RiCustomerService2Line />,
      title1: "Service",
      desc: " With 24/7 customer support, passengers have peace of mind knowing that assistance is available around the clock. Whether it's a booking inquiry, navigation assistance, or addressing concerns during the ride, customer support ensures a seamless and reliable travel experience.",
    },
    {
      img1: <GiPoliceOfficerHead />,
      title1: "Driver ",
      desc: " 24/7 driver support, car taxi services ensure that drivers have assistance and guidance whenever needed. but booking the driver before 3-4 hours or 1 day ",
    },
    {
      img1: < FcBusinesswoman />,
      title1: "Lady Driver ",
      desc: "We are excited to announce that we will soon be introducing a dedicated Lady Driver Taxi Service to our fleet. With safety and inclusivity as our top priorities, we understand the importance of providing passengers with the option to choose female drivers for their journeys.",
    },
  ];
  return (
    <>
      <div className="Services-section-total-div">
        <div className="Services-hero-section">
          <div className="Services-hero-section-content-div">
            <h4>Our Services</h4>
            <h1> Bike and Auto and Car Taxi Services</h1>
            {/* <div></div> */}
            <p>
            For all of your travel needs, Bike and Auto Car Taxi Service provides dependable and easy-to-use transportation options. Our collection of bikes, vehicles, and automobiles is available for you to use whether you need a fast ride around town, a relaxing commute to work, or a hassle-free airport transport.
            </p>
            <div>
              <button>Book Now</button>
            </div>
          </div>
          <div className="Services-hero-image-div">
            <img src={img1} className="image" />
          </div>
        </div>

        <div className="Services-what-we-de-section-main-div">
          <div className="Services-head-main-div">
            <h1>What We Do</h1>
          </div>
          <div className="Services-what-we-de-section-cards-main-div">
            {WhatWeDoData.map((each,i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Services-what-we-de-section-cards-div" key={i}>
                  <div className="Services-what-we-de-section-cards-inner-div">
                    <div className="Services-what-we-de-section-cards-inner-div-inner-div">
                      <h1>{each.img1}</h1>
                      <h3>{each.title1}</h3>
                    </div>
                    <div className="Services-what-we-de-section-cards-para-div">
                      <p>
                      {each.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Services-package-main-div">
          <div className="Services-package-single-card-content-head-div">
            <h1>Our Packages</h1>
            <p>
            taxi fare packages provide passengers with a reliable, convenient, and cost-effective transportation option, making them a preferred choice for travelers seeking flexibility and value for money in their journeys.
            </p>
          </div>
          <div className="Services-package-cards-main-div">
            {SerivesPackageData.map((each,i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Services-package-single-card" key={i}>
                  <div className="Services-package-single-card-content-div">
                    <h1>
                      {each.logo}
                    </h1>
                    <h2>{each.name}</h2>
                    <div className="Services-package-content-divs-div">
                      <div className="Services-package-content-div">
                        <h4>
                          <HiOutlineCheckBadge />{" "}
                        </h4>
                        <h3> Base Price</h3>
                      </div>
                      <div className="Services-package-content-div">
                        <h4>
                          <HiOutlineCheckBadge />{" "}
                        </h4>
                        <h3>Low Price</h3>
                      </div>
                      <div className="Services-package-content-div">
                        <h4>
                          <HiOutlineCheckBadge />{" "}
                        </h4>
                        <h3>High Profit</h3>
                      </div>
                      <div className="Services-package-content-div">
                        <h4>
                          <HiOutlineCheckBadge />{" "}
                        </h4>
                        <h3>Safe Ride</h3>
                      </div>
                    </div>
                    <div className="Services-package-content-button-div">
                      <button>Book Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;