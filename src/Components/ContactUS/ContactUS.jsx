/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUS.css";
import robo from "../../assets/robo-logo.png";

const ContactUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const fromName = formData.get("from_name");
    const fromNumber = formData.get("from_number");

    // Validation 1: Check if from_name is at least 3 characters and contains at least one non-numeric character
    if (fromName.length < 3 || /^\d+$/.test(fromName)) {
      alert("Please enter a valid username.");
      return;
    }

    // Validation 2: Check if from_number contains only numbers and is exactly 10 digits
    if (!/^\d{10}$/.test(fromNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    emailjs
      .sendForm("service_lzamjwz", "template_8s32mog", form.current, {
        publicKey: "3RsNlTU6-EFIyZOlU",
      })
      .then(
        () => {
          // Clear form input data
          form.current.reset();
          // Show success alert
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-us-main-container">
        {/* <div className="contact-us-header-container">
         

        </div> */}
        <div className="contact-us-header">
          <p>
            With 24/7 customer support, passengers have peace of mind knowing
            that assistance is available around the clock. Whether it's a
            booking inquiry, navigation assistance, or addressing concerns
            during the ride, customer support ensures a seamless and reliable
            travel experience. This level of accessibility sets taxi services
            apart, offering prompt assistance and personalized solutions at any
            hour, making travel convenient and stress-free for passengers.
          </p>

          {/* <hr /> */}
        </div>
      
        <div className="contact-us-whole-container">
          
          <form ref={form} onSubmit={sendEmail}>
          <div className="contact-us-questions">
          <h1>If you have any questions, please contact me with your issue.</h1>
        </div>
            <input
              type="text"
              placeholder="Full Name"
              name="from_name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="from_email"
              required
            />

            <input
              type="tel"
              placeholder="Mobile"
              name="from_number"
              required
            />

            <textarea
              cols={70}
              rows={8}
              placeholder="Message"
              name="from_message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>

          <div className="Contact-image-total-div">
            <img src={robo} alt="contact-form " className="contact-form-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
