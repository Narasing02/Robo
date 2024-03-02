import { useEffect, useState } from "react";

import "./RoboscorpHome.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdNavigate } from "react-icons/io";
import { FaPersonBreastfeeding } from "react-icons/fa6";
// import scooter from '../../assets/yellow-scooter.jpg'

const boardingLocation = [
  {
    city: "Gachibowli",
    lat: 17.440081,
    long: 78.348915,
  },
  {
    city: "Shamshabad",
    lat: 17.25116,
    long: 78.437737,
  },
  {
    city: "Kukatpally",
    lat: 17.491659,
    long: 78.391983,
  },
  {
    city: "Mallapur",
    lat: 17.1888245,
    long: 78.2276776,
  },
  {
    city: "Hi-Tech City",
    lat: 17.4416,
    long: 78.3826,
  },
  {
    city: "Habsiguda",

    lat: 17.409628,
    long: 78.544113,
  },
  {
    city: "Jubilee Hills",
    lat: 17.426161,
    long: 78.412537,
  },
  {
    city: "Secunderabad",
    lat: 17.361719,
    long: 78.475166,
  },
  {
    city: "LB Nagar",
    lat: 17.3457176,
    long: 78.55222959999992,
  },
  {
    city: "Madhapur",
    lat: 17.448294,
    long: 78.391487,
  },
  {
    city: "DurgamCheruvu",
    lat: 17.434959,
    long: 78.383041,
  },
];

// const board=[
//     "gachibowli","hyderabad","Hi-Tech City"
// ]

const destinationLocation = [
  {
    city: "Gachibowli",
    lat: 17.440081,
    long: 78.348915,
  },
  {
    city: "Shamshabad",
    lat: 17.25116,
    long: 78.437737,
  },
  {
    city: "Kukatpally",
    lat: 17.491659,
    long: 78.391983,
  },
  {
    city: "Mallapur",
    lat: 17.1888245,
    long: 78.2276776,
  },
  {
    city: "Hi-Tech City",
    lat: 17.4416,
    long: 78.3826,
  },
  {
    city: "Habsiguda",

    lat: 17.409628,
    long: 78.544113,
  },
  {
    city: "Jubilee Hills",
    lat: 17.426161,
    long: 78.412537,
  },
  {
    city: "Secunderabad",
    lat: 17.361719,
    long: 78.475166,
  },
  {
    city: "LB Nagar",
    lat: 17.3457176,
    long: 78.55222959999992,
  },
  {
    city: "Madhapur",
    lat: 17.448294,
    long: 78.391487,
  },
  {
    city: "DurgamCheruvu",
    lat: 17.434959,
    long: 78.383041,
  },
];

const RoboscorpHome = () => {
  const [boardingPoint, setBoardingPoint] = useState("");
  const [isVisible, setIsvisible] = useState(true);

  const [dropingPoint, setDropingPoint] = useState("");
  const [isDrop, setIsDrop] = useState(true);

  const [latitudes, setLatitudes] = useState([]);
  
  const [fareVisible,setFareVisible]=useState(false)
  // priceStates
  const [bikeFareCharge,setBikeFareCharge]=useState(35)
  const[ autoFareCharges,setAutoFareCharges]=useState(40)
  const [carFareCharges,setCarFareCharges] =useState(75)



  // Boarding Functionality
  const FindBoardingPoint = (e) => {
    setBoardingPoint(e.target.value);
    setIsvisible(true); // Ensure suggestions are visible when the location input changes
  };

  const BoardingValue = (each) => {
    setBoardingPoint(each.city);
    setIsvisible(false);
    let lat1 = each.lat;
    let long1 = each.long;
    const newLats = { lat1, long1 };
    setLatitudes([...latitudes, newLats]);
  };

  //Dropping Functionality
  const FindDropingPoint = (e) => {
    setDropingPoint(e.target.value);
    setIsDrop(true);
  };
  const DropingValue = (each) => {
    setDropingPoint(each.city);
    setIsDrop(false);
    let lat2 = each.lat;
    let long2 = each.long;
    const newLats2 = { lat2, long2 };
    setLatitudes([...latitudes, newLats2]);
  };

  // Submit Handler functionality

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(boardingPoint, dropingPoint);
    setBoardingPoint("");
    setDropingPoint("");
    document.querySelector(".gender").value = "";
    setLatitudes([]);
    setTimeout(()=>{
      setFareVisible(true);

    },2000)
    
  };

  // Fares Functionalities base on KM

  //   function BikeFare(value){
  //     let BikeFareCharges;
  //     let distance1 = String(value);
  //     let distance=parseFloat(distance1.slice(0,5))
  //     // let timeFare =0;
  //     // let distanceFare = distance <2 ?
  //     let platformFees =1
  //     let comission      //15%
  //     let baseFare
  //      let distanceFare
  //       let totalfare

  //     if(distance <3){
  //            baseFare =35;
  //          distanceFare =baseFare+platformFees
  //         comission =distanceFare*(15/100)
  //        totalfare =distanceFare  //+comission
  //         console.log(totalfare)
  //         BikeFareCharges= totalfare
  //     }
  //     else if(distance>3 & distance<=15){
  //          baseFare =13;
  //          distanceFare =baseFare+platformFees+(distance*9)
  //         comission =distanceFare*(15/100)
  //        totalfare =distanceFare+comission
  //         console.log(totalfare)
  //         BikeFareCharges= totalfare
  //     }
  //     else if(distance>15 & distance<30){
  //          baseFare =12;
  //          distanceFare =baseFare+platformFees+(distance*8)
  //         comission =distanceFare*(15/100)
  //        totalfare =distanceFare+comission
  //         console.log(totalfare)
  //         BikeFareCharges= totalfare

  //     }

  //   console.log(distance)
  //   console.log(BikeFareCharges)
  //   // return BikeFareCharges

  // }


  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    console.log(d);

    
  function BikeFareChargesRobo(value){
      let BikeFareCharges;
      let distance1 = String(value);
      let distance=parseFloat(distance1.slice(0,5))
      // let timeFare =0;
      // let distanceFare = distance <2 ?
      let platformFees =1
      let comission      //15%
      let baseFare
       let distanceFare
        let totalfare

      if(distance <3){
             baseFare =35;
           distanceFare =baseFare+platformFees
          comission =distanceFare*(15/100)
         totalfare =distanceFare  //+comission
          console.log(totalfare)
          BikeFareCharges= totalfare
      }
      else if(distance>3 & distance<=15){
           baseFare =13;
           distanceFare =baseFare+platformFees+(distance*9)
          comission =distanceFare*(15/100)
         totalfare =distanceFare+comission
          console.log(totalfare)
          BikeFareCharges= totalfare
      }
      else if(distance>15 & distance<30){
           baseFare =12;
           distanceFare =baseFare+platformFees+(distance*9.5)
          comission =distanceFare*(15/100)
         totalfare =distanceFare+comission
          console.log(totalfare)
          BikeFareCharges= totalfare

      }

    console.log(distance)
    console.log(BikeFareCharges)
    // return BikeFareCharges
 setBikeFareCharge(BikeFareCharges)
    

  }
    BikeFareChargesRobo(d)
    AutoFare(d)
    CarFare(d)
  }

  function AutoFare(value){

    let distance1 = String(value);
    let distance=parseFloat(distance1.slice(0,5))
    // let timeFare =0;
    // let distanceFare = distance <2 ? 
    let AutoFareCharge;
    let platformFees =1
    let comission      //15%
    let baseFare =15
    let distanceFare
      let totalfare
      let baseFare1
    
    if(distance <3){
         baseFare1 =baseFare+20
        distanceFare =baseFare1+platformFees
        comission =distanceFare*(15/100)
       totalfare =distanceFare  //+comission
        console.log(totalfare)
        AutoFareCharge= totalfare
    }
    else if(distance>3 & distance<=15){
        baseFare1 =baseFare +10;
        distanceFare =baseFare+platformFees+(distance*9)
        comission =distanceFare*(15/100)
       totalfare =distanceFare+comission
        console.log(totalfare)
        AutoFareCharge= totalfare
    }
    else if(distance>15 & distance<30){
        baseFare1 =8+baseFare;
        distanceFare =baseFare+platformFees+(distance*8)
        comission =distanceFare*(15/100)
       totalfare =distanceFare+comission
        console.log(totalfare)
        AutoFareCharge= totalfare
        
    }
    
  console.log(distance)
  setAutoFareCharges(AutoFareCharge)
  
    
  }
  

  function CarFare(value){

    let distance1 = String(value);
    let distance=parseFloat(distance1.slice(0,5))
    // let timeFare =0;
    // let distanceFare = distance <2 ? 
    let CarFareCharge;
    let platformFees =1
    let comission      //15%
    let baseFare =30
    let distanceFare
      let totalfare
      let baseFare1
    
    if(distance <3){
         baseFare1 =baseFare+20
        distanceFare =baseFare1+platformFees
        comission =distanceFare*(15/100)
       totalfare =distanceFare  //+comission
        console.log(totalfare)
        CarFareCharge= totalfare
    }
    else if(distance>3 & distance<=15){
        baseFare1 =baseFare +10;
        distanceFare =baseFare+platformFees+(distance*9)
        comission =distanceFare*(15/100)
       totalfare =distanceFare+comission
        console.log(totalfare)
        CarFareCharge= totalfare
    }
    else if(distance>15 & distance<30){
        baseFare1 =8+baseFare;
        distanceFare =baseFare+platformFees+(distance*8)
        comission =distanceFare*(15/100)
       totalfare =distanceFare+comission
        console.log(totalfare)
        CarFareCharge= totalfare
        
    }
    
  console.log(distance)
  setCarFareCharges(CarFareCharge)
    
  }


  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function gettingValues() {
    console.log(latitudes);
    // let lat11 =latitudes[0].lat1;
    // let lat22 =latitudes[0].long1;

    // let long11=latitudes[1].lat2;
    // let long22=latitudes[1].long2;
    if (latitudes.length >= 2) {
      getDistanceFromLatLonInKm(
        latitudes[0].lat1,
        latitudes[0].long1,
        latitudes[1].lat2,
        latitudes[1].long2
      );
    }
  }

  useEffect(()=>{
    gettingValues();

  })
 
  // getDistanceFromLatLonInKm(latitudes[0].lat1,latitudes[0].long1,latitudes[1].lat2,latitudes[1].long2)


  
  return (
    <div>
      <div className="Roboscorp-section1-container" id="roboscorp-section1">
        <form onSubmit={submitHandler}>
          <div>
            <FaLocationDot className="location-icons" />
            <input
              type="text"
              placeholder="Enter Location"
              onChange={FindBoardingPoint}
              value={boardingPoint}
            />
          </div>
          {boardingPoint.length > 0 && isVisible && (
            <div className="boarding-point-container">
              {boardingLocation
                .filter((loc) =>
                  loc.city.toLowerCase().includes(boardingPoint.toLowerCase())
                )
                .map((loc, index) => (
                  <li key={index} onClick={() => BoardingValue(loc)}>
                    {loc.city}
                  </li>
                ))}
            </div>
          )}
          {/* {
            boardingPoint.length>0 ?<div className={isVisible ? "boarding-point-Container":"boardingPointerContainer1"}>
                {
                 FilterBoarding.map((each,i)=>{
                return(<li key={i} onClick={()=>BoardingValue(each)}>{each.city}</li>)
            })
        }

            </div>
            :null
            } */}
          <div>
            <input
              type="text"
              placeholder="Enter destination"
              onChange={FindDropingPoint}
              value={dropingPoint}
            />
            <IoMdNavigate className="location-icons" />
          </div>

          {dropingPoint.length > 0 && isDrop && (
            <div className="boarding-point-container1">
              {destinationLocation
                .filter((loc) =>
                  loc.city.toLowerCase().includes(dropingPoint.toLowerCase())
                )
                .map((loc, index) => (
                  <li key={index} onClick={() => DropingValue(loc)}>
                    {loc.city}
                  </li>
                ))}
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Driver Male/Female  opt.."
              className="gender"
            />
            <FaPersonBreastfeeding className="location-icons" />
          </div>
          <button type="submit">See Prices</button>
        </form>

        <div className="map-container">Map</div>
      </div>
      <h1 className="our-fares"> OUR Fares</h1>
      <div>
    
      </div>
{
  fareVisible ?
  <div className="Roboscorp-section2-container">
    <div className="bike-fare-card">
      <img
        src="https://i.pinimg.com/564x/80/06/e4/8006e4eaef9d67af462fa1922deed496.jpg"
        alt=""
      />
      <div>
        <p>
          Fare : <span>{String(bikeFareCharge).slice(0,5)}</span> <del>{String(bikeFareCharge+20.7).slice(0,5)}</del>
        </p>
        <button>Book </button>
      </div>
    </div>

    <div className="bike-fare-card">
      <img
        src="https://i.pinimg.com/564x/0c/fc/54/0cfc548b9da59e7c212e1d8a501dcb9d.jpg"
        alt=""
      />
      <div>
        <p>
          Fare : <span>{String(carFareCharges).slice(0,5)}</span> <del>{String(carFareCharges+25.9).slice(0,5)}</del>
        </p>
        <button>Book </button>
      </div>
    </div>
    <div className="bike-fare-card">
      <img
        src="https://i.pinimg.com/736x/d6/30/87/d63087338ab7e957f635f2e76d8cf73f.jpg"
        alt=""
      />
      <div>
        <p>
          Fare : <span>{String(autoFareCharges).slice(0,5)}</span> <del>{String(autoFareCharges+22).slice(0,5)}</del>
        </p>
        <button>Book </button>
      </div>
    </div>
  </div> : <div className="prices-Loading-section">

<p>Prices are Loading</p>
<span className="loader"></span>


</div>
}

      


      <a href="#roboscorp-section1">
        <div className="choose-location">
          <p> We Choose location & Destination</p>
        </div>
      </a>
    </div>
  );
};

export default RoboscorpHome;
