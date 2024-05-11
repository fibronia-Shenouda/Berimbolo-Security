import "../App.css";
import "../styles/products.css";
import { FaCheckCircle } from "react-icons/fa";
import bg from "../assets/bg2.png";
import bg1 from "../assets/bg.png";

export const Products = () => {
  return (
    <div>
      <section id="products" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="p-title title">
          <div className="p-line"></div>
          <div>
            <h2 className="p-header">Our Products</h2>
          </div>
          <div className="p-line"></div>
        </div>
        <div className="p-container container">
          <div
            className="card p-card"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="card-body">
              <div className="p-card-title">
                <div className="offer-title mb-2">Basic security</div>
                <h5 className="card-title text-white">$ 45</h5>
              </div>
              <div className="offer">
                <div className="o1 o">
                  <FaCheckCircle color="green" size={15} /> 1 x alarm system
                </div>
                <div className="o2 o">
                  <FaCheckCircle color="green" size={15} /> 1 x CCTV camera
                </div>
                <div className="03 o">
                  <FaCheckCircle color="green" size={15} /> Local CCTV footage
                  storage o NOT centrally monitored
                </div>
              </div>
            </div>
            <botton className="p-book-btn  btn1">Buy Now</botton>
          </div>

          <div className="card p-card">
            <div className="card-body">
              <div className="p-card-title">
                <div className="offer-title mb-2">
                  Standard security
                </div>
                <h5 className="card-title text-dark">$ 90</h5>
              </div>
              <div className="offer" style={{backgroundColor: "rgba(56, 217, 186, 0.4)"}}>
                <div className="o o4">
                  <FaCheckCircle color="green" size={15} /> 1 x alarm system
                </div>
                <div className="o o5">
                  <FaCheckCircle color="green" size={15} /> 2 CCTV cameras
                </div>
                <div className="o o6">
                  <FaCheckCircle color="green" size={15} /> Online and local
                  CCTV footage storage
                </div>
                <div className="o o7">
                  <FaCheckCircle color="green" size={15} /> NOT centrally
                  monitored
                </div>
              </div>
            </div>
            <botton className="p-book-btn btn2" style={{backgroundColor:"#0F1F2B"}}>Buy Now </botton>
          </div>

          <div
            className="card p-card"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="card-body">
              <div className="p-card-title">
                <div className="offer-title mb-2">Deluxe security packag</div>

                <h5 className="card-title text-white">$ 40</h5>
              </div>
              <div className="offer">
                <div className="o o8">
                  <FaCheckCircle color="green" size={15} /> 1 x alarm system
                </div>
                <div className="o o9">
                  <FaCheckCircle color="green" size={15} /> 4 CCTV cameras
                </div>
                <div className="o o10">
                  <FaCheckCircle color="green" size={15} /> Online and local
                  CCTV footage storage
                </div>
                <div className="o o11">
                  <FaCheckCircle color="green" size={15} /> Centrally monitored
                </div>
              </div>
            </div>
            <botton className="p-book-btn btn3">Buy Now</botton>
          </div>

          <div className="card p-card">
            <div className="card-body">
              <div className="p-card-title">
                <div className="offer-title mb-2">Custom Security systems</div>
                <h5 className="card-title text-dark">$ 110</h5>
              </div>
              <div className="offer" style={{backgroundColor: "rgba(56, 217, 186, 0.4)"}}>
                <div className="o o11">
                  <FaCheckCircle color="green" size={15} /> customers must
                  contact the company to arrange an assessment and planning
                  meeting.
                </div>
              </div>
            </div>
            <botton className="p-book-btn btn4" style={{backgroundColor: "#0F1F2B"}}>Buy Now</botton>
          </div>
        </div>
      </section>
    </div>
  );
};
