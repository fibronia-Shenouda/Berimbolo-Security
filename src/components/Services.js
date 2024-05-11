import "../App.css";
import "../styles/services.css";
import bg from "../assets/bg.png";
import { FiLock, FiShield, FiAlertCircle, FiEye } from "react-icons/fi";

export const Services = () => {
  return (
    <div>
      <section
        id="services"
        style={{ backgroundImage: `url(${bg})` }}
        className="container-fluid"
      >
        <div className="p-title title">
          <div className="p-line"></div>
          <div>
            <h2 className="p-header">Our Services</h2>
          </div>
          <div className="p-line"></div>
        </div>
        <div className="row services-container">
          <div className="service">
            <div className="card s-card">
              <div className="card-body">
                <FiLock className="icon" />
                <h5 className="s-card-title">Security risk assessments</h5>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="card s-card">
              <div className="card-body">
                <FiShield className="icon" />
                <h5 className="s-card-title">
                  Sale and installation of security systems (alarms and CCTV)
                </h5>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="card s-card">
              <div className="card-body">
                <FiAlertCircle className="icon" />
                <h5 className="s-card-title">Security system maintenance</h5>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="card s-card">
              <div className="card-body">
                <FiEye className="icon" />
                <h5 className="s-card-title">
                  24/7 monitoring of: Alarm systems CCTV footage
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
