// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function BikeFare(value){
    let distance1 = String(value);
    let distance=parseFloat(distance1.slice(0,5))
    let timeFare =0;
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
    }
    else if(distance>3 & distance<=15){
         baseFare =13;
         distanceFare =baseFare+platformFees+(distance*9)
        comission =distanceFare*(15/100)
       totalfare =distanceFare+comission
        console.log(totalfare)
    }
    else if(distance>15 & distance<30){
         baseFare =12;
         distanceFare =baseFare+platformFees+(distance*8)
        comission =distanceFare*(15/100)
       totalfare =distanceFare+comission
        console.log(totalfare)
        
    }
    
  console.log(distance)
    
}

// function AutoFare(value){
//   let AutoFareCharges;
//       let distance1 = String(value);
//       let distance=parseFloat(distance1.slice(0,5))
//       // let timeFare =0;
//       // let distanceFare = distance <2 ?
//       let platformFees =1
//       let comission      //15%
//       let baseFare
//       let distanceFare
//         let totalfare
    
//   if(distance <3){
//         baseFare1 =baseFare+20
//       distanceFare =baseFare1+platformFees
//       comission =distanceFare*(15/100)
//      totalfare =distanceFare  //+comission
//       console.log(totalfare)
//      AutoFareCharges= totalfare
//   }
//   else if(distance>3 & distance<=15){
//       baseFare1 =baseFare +10;
//       distanceFare =baseFare+platformFees+(distance*9)
//       comission =distanceFare*(15/100)
//      totalfare =distanceFare+comission
//       console.log(totalfare)
//       AutoFareCharges= totalfare
//   }
//   else if(distance>15 & distance<30){
//       baseFare1 =8+baseFare;
//       distanceFare =baseFare+platformFees+(distance*8)
//       comission =distanceFare*(15/100)
//      totalfare =distanceFare+comission
//       console.log(totalfare)
//       AutoFareCharges= totalfare
      
//   }
//   console.log(AutoFareCharges)
  

  
// }

function AutoFare(value){
  let distance1 = String(value);
  let distance=parseFloat(distance1.slice(0,5))
  // let timeFare =0;
  // let distanceFare = distance <2 ? 
  let platformFees =1
  let comission      //15%
  let baseFare =15
  let distanceFare
    let totalfare
    
  if(distance <3){
        baseFare1 =baseFare+20
      distanceFare =baseFare1+platformFees
      comission =distanceFare*(15/100)
     totalfare =distanceFare  //+comission
      console.log(totalfare)
      return totalfare
  }
  else if(distance>3 & distance<=15){
      baseFare1 =baseFare +10;
      distanceFare =baseFare+platformFees+(distance*9)
      comission =distanceFare*(15/100)
     totalfare =distanceFare+comission
      console.log(totalfare)
      return totalfare
  }
  else if(distance>15 & distance<30){
      baseFare1 =8+baseFare;
      distanceFare =baseFare+platformFees+(distance*8)
      comission =distanceFare*(15/100)
     totalfare =distanceFare+comission
      console.log(totalfare)
      return totalfare
      
  }
  
console.log(distance)
  
}
//   function CarFare(value){
//     let distance1 = String(value);
//     let distance=parseFloat(distance1.slice(0,5))
//     // let timeFare =0;
//     // let distanceFare = distance <2 ? 
//     let platformFees =1
//     let comission      //15%
//     let baseFare=50
//      let distanceFare
//       let totalfare
      
      
//     if(distance <3){
//           baseFare =35;
//          distanceFare =baseFare+platformFees
//         comission =distanceFare*(15/100)
//       totalfare =distanceFare  //+comission
//         console.log(totalfare)
//         return totalfare
//     }
//     else if(distance>3 & distance<=15){
//          baseFare =13;
//          distanceFare =baseFare+platformFees+(distance*9)
//         comission =distanceFare*(15/100)
//       totalfare =distanceFare+comission
//         console.log(totalfare)
//         return totalfare
//     }
//     else if(distance>15 & distance<30){
//          baseFare =12;
//          distanceFare =baseFare+platformFees+(distance*8)
//         comission =distanceFare*(15/100)
//       totalfare =distanceFare+comission
//         console.log(totalfare)
//         return totalfare
        
//     }
    
//   console.log(distance)
    
// }

// BikeFare(6);
// CarFare(4);
AutoFare(6);