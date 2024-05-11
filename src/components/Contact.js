import "../App.css";
import "../styles/contact.css";
import bg from "../assets/bg.png";
import contacts from "../assets/contact.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="contact-container">
          <div className="contacts">
            <img src={contacts} className="contact-img" />
          </div>
          <div>
            <div className="form">
              <form>
                <div className="row">
                  <div className="col">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col">
                    <label>Second Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <label>Your Email Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ex: test@gmial.com"
                />
                <label>Your Message</label>
                <textarea className="form-control" rows={5}></textarea>
                <button
                  className="btn mt-3 text-white"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
