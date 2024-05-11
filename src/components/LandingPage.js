import "../App.css";
import "../styles/landing.css";
import { Navbare } from "./Navbare";
import backgroundImage from "../assets/landing.png";
import { HashLink as Link } from "react-router-hash-link";

export const LandingPage = () => {
  return (
    <div>
      <section style={{ backgroundImage: `url(${backgroundImage})` }} id="home">
        <Navbare />
        <div className="landing-content">
          <h2 className="landing-text">
            Offering <span style={{ color: "#38D9BA" }}>comprehensive</span> security solutions tailored for homes and small
            businesses, from sales to seamless installation.
          </h2>
          <div className="landing-buttons">
            <button className="btn-1"><Link className="nav-link" to='#services' smooth>Explore more</Link></button>
            <button className="btn-2"><Link className="nav-link" to="#generalHelp" smooth>General Help</Link></button>
          </div>
        </div>
      </section>
    </div>
  );
};
