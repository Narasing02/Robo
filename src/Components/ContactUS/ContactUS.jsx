/* eslint-disable react/no-unescaped-entities */

import "./ContactUS.css";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
// import Navbar from "../Navbar/Navbar";
const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="Robo-contact-form-total-div">
  
        <div className="Robo-contact-form-main-div">
          <div className="Robo-contact-form-get-touch-div">
            <div className="Robo-contact-form-get-touch-inner-div">
              <div className="Robo-contact-form-get-touch-inner-head-div">
                <h2>Get In Touch</h2>
                <p>
                  "I'm here to 'help' you 'any time' you need, just let me know
                  if you require assistance{" "}
                </p>
              </div>

              <form className="Robo-contact-form-get-touch-form-tag">
                <input type="text" placeholder="Your Name : " />
                <input type="email" placeholder="Your Email : " />
                <textarea placeholder="Enter Your Message"></textarea>
              </form>
              <div>
                <button>Send</button>
              </div>
            </div>
          </div>
          <div className="Robo-contact-form-contact-div">
            <h1>Contact Us</h1>
            <div className="Robo-contact-form-contact-inner-div">
              <h3>
                <span>
                  <IoLocation />{" "}
                </span>{" "}
                Location
              </h3>
              <h3>
                <span>
                  <MdEmail />{" "}
                </span>{" "}
                kumar@gmail.com
              </h3>
              <h3>
                <span>
                  {" "}
                  <MdCall />{" "}
                </span>{" "}
                9573773418
              </h3>
              <h3>
                <span>
                  {" "}
                  <CiGlobe />{" "}
                </span>{" "}
                9390431447
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
