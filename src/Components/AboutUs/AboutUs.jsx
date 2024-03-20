import "./AboutUs.css";
import roboImg from '../../assets/robo-logo.png'

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-section1">
        <h1>/About US</h1>
      </div>

      <div className="about-us-section2">
        <div>
          <img
            src={roboImg}
            alt=""
          />
        </div>
        <div>
          <p>
            The flexibility and accessibility of transportation. Regardless of
            your location or the time of day, you have the opportunity to embark
            on a journey or travel to your desired destination. The capability
            to deliver parcels or shipments to any location, regardless of
            distance
          </p>
          <p>
            Moreover, the accessibility of transportation extends beyond
            personal mobility. It encompasses the seamless movement of goods and
            parcels, facilitating commerce and trade on a global scale. This
            capability ensures that packages can be delivered to any location,
            regardless of the distance involved, thereby fostering economic
            activities and enhancing connectivity between regions.
          </p>
        </div>
      </div>
{/* 
      <div className="about-us-our-team">
        <h1>Our Team</h1>
        <div className="about-us-card">
          <div>
            <h1>Dr. SHANKAR  </h1>
            <p>
            A Entrepreneur with an acute passion for business and enterprising. began his career in Dubai in the transportation and construction industries, eventually expanding his company over many nations. 

30 years of industry expertise and a lot of hard effort to get here.
a dynamic, results-oriented leader with a proven track record of building fast-growing companies

Technology Integration: The company provides a range of services, from IT infrastructure projects 
            </p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/03/28/16/29/business-696076_1280.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="about-us-card2">
          <div>
            <h1>Lorem Dolor </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              quia exercitationem ad cupiditate, esse maxime commodi illo.
              Corporis fugiat culpa a iure! Temporibus at unde quasi odio, quod
              est. Nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti, provident ea voluptates, excepturi nisi iusto
              inventore eligendi dolorem facere minima eius accusamus
              laudantium? Magnam nostrum porro facere ex reprehenderit
              perspiciatis.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/08/14/15/28/smiling-888532_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div className="about-us-career-page">
        <p>
          Join us in exploring a world of endless opportunities. Let’s find a
          spot for you.
        </p>

        <button className="button-57" role="button">
          <span className="text">Join With US</span>
          <span>Go To Careerpage</span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
