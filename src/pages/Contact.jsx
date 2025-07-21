
import "./Contact.css";
// import contact from "../assets/images/Contact us-pana.svg";
import {
  MdOutlineLocationOn,
  MdOutlineMailOutline,
  MdPhone,
} from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <div className="contactWrapper">
        <div className="contactHeading">
          <h2>CONTACT US</h2>
          <p>
            Feel free to contact us through our email, phone number, or by reaching our office for any enquiry, complaint or 
          </p>
          {/* <img src={contact} alt="" /> */}
        </div>

        <div className="contactCardWrapper">
          <div className="contactCard">
            <MdOutlineLocationOn />
            <h3>Address</h3>
            <p>
                Plot 59 Professor Okujagu street, off Trans Amadi road, Port
                Harcourt.
            </p>
            <a href="https://maps.app.goo.gl/GG4zBvKy4j3K44cu5" target="_blank">
              View on map <FaArrowRight />
            </a>
          </div>
          <div className="contactCard">
            <MdPhone />
            <h3>Contact</h3>
            <p>
              <span>+234 8188591639</span>
              <span>+234 9152151749</span>
            </p>
          </div>
          <div className="contactCard">
            <MdOutlineMailOutline />
            <h3>Email</h3>
            <p>
              <span>info@substrataoilandgas.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
