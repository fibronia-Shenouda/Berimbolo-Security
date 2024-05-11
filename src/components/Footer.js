import "../App.css";
import "../styles/footer.css";
import footer from "../assets/footer.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <div>
      <section id="footer" style={{ backgroundImage: `url(${footer})` }}>
        <h2 className="footer-title">
          Berimbolo <span style={{ color: "#38D9BA" }}>Security</span>
        </h2>

        <div className="footer-content">
          <div className="f-services">
            <h6 className="s-f-title">Our Services</h6>
            <li>Security risk assessments</li>
            <li>
              Sale and installation of security systems (alarms and CCTV){" "}
            </li>
            <li>Security system maintenance</li>
            <li>
              24/7 monitoring of:
              <li> Alarm systems</li>
              <li> CCTV footage</li>
            </li>
          </div>
          <div className="f-value">
            <h6 className="v-f-title">Our Value</h6>
            <div>Berimbolo Security sell and install security systems for homes and small businesses.</div>
          </div>
          <div className="f-contacts">
            <h6 className="c-f-title">Contacts</h6>
            <div>
              <FaLinkedin className="icon" size={20} /> <span>LinkedIn</span>
            </div>
            <div>
              <FaFacebook className="icon" size={20} /> <span>Facebook</span>
            </div>
            <div>
              <FaTwitter className="icon" size={20} /> <span>Twitter</span>
            </div>
            <div>
              <FaInstagram className="icon" size={20} /> <span>Instgram</span>
            </div>
            <div>
              <AiFillGithub className="icon" size={20} /> <span>Github</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
