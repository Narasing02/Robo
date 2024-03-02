import "./DocumentComp.css";
import globe from '../../assets/globe.gif';
import taxiCarWithLocation from '../../assets/shine-yellow-taxi-car-and-phone-with-a-map-1.png'
import growmoney from '../../assets/services-taxi.gif'

const DocumentComp = () => {
  return (
    <div className="documents-main-container">
      <div className="documents-section1">
        <h2>/Documents</h2>
      </div>
      <div className="documents-section2">
        <h2>How to Become a Robo-Taxi Partner</h2>
        <div className="document-section-ul-cont">
 


       <ul>
            <li>At first you need to download the Robo-Taxi Partner app from the play store on your smartphone.</li>
            <li> Click on ‘Get Started’</li>
            <li>On the next page select your language and tap on the arrow mark on the right down corner of the page. </li>
        <li>You need to register or login, by entering your mobile number and password.</li>
            <li> On the next page enter the OTP sent on your registered mobile number.</li>
            <li>Now you need to choose a city from Search city.</li>
            <li>Select a city from the drop-down menu, choose the service and tap Next.</li>
            <li> On the new page enter required details. (Name, date of birth, referral code etc)</li>
            <li>Add your picture and tap on the arrow option</li>
            <li>On the next page, add your driving license number and driving license expiry date.</li>
          </ul>
         
      <img src={globe} alt=""/>
        </div>
      </div>

      <div className="document-section-3">
        <div className="document-section3-page1">
        <h2>Things you need to become a Robo-Taxi Partner?</h2>
        <p>To join Robo Taxi fleet as a Captain, here is a list of things you need to have:</p>
        </div>
        <div className="taxi-car-with-container">
            <div>
                {/* <img src={growmoney} alt=""/> */}
                <img src={taxiCarWithLocation} alt=""/>
            </div>
            <ul className="taxi-doc-sec">
                <li>You must have an android phone with a 3G mobile data connection</li>
                <li>You must have a bike from 2009 or newer model</li>
                <li>You must have a Car from 2009 or newer model</li>
                <li>You must have a Auto from 2009 or newer model</li>
                <li>You must have a valid Driving Licence</li>
                <li>You must have a vehicle registration certificate (RC)</li>
                <li>You must have valid  insurance (not expired) for your Vehicle</li>
                <li>PAN Card is also must</li>
                <li>The last is two helmets (for captain and pillion)</li>
            </ul>
        </div>
      </div>
      <div className="document-section-4">
        <img src={growmoney} alt=""/>
      </div>


    </div>
  );
};

export default DocumentComp;
