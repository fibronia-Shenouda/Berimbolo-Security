import "../App.css";
import "../styles/generalHelp.css";
import risk from "../assets/1.jpg";
import update from "../assets/2.webp";
import education from "../assets/3.png";
import bg from "../assets/bg2.png";

export const GeneralHelp = () => {
  return (
    <div>
      <section id="generalHelp">
        <div className="p-title title pt-3">
          <div className="p-line"></div>
          <div>
            <h2 className="p-header text-dark">General Help</h2>
          </div>
          <div className="p-line"></div>
        </div>

        <div className="helps container">
          <div className="help">
            <div>
              <img src={risk} />
            </div>
            <div className="help-content">
              <h3>Risk Assessment and Mitigation Strategies</h3>
              <p className="help-desc">
                Identify vulnerabilities, implement security measures tailored
                to mitigate risks, such as alarms, access controls, and employee
                training.
              </p>
            </div>
          </div>

          <div className="help">
            <div>
              <img src={update} />
            </div>
            <div className="help-content">
              <h3>Regular Security Audits and Updates</h3>
              <p className="help-desc">
                Periodic reviews, updates of security measures to adapt to
                evolving threats, technology advancements, ensuring ongoing
                effectiveness and resilience.
              </p>
            </div>
          </div>

          <div className="help">
            <div>
              <img src={education} />
            </div>
            <div className="help-content">
              <h3>Employee Education and Awareness</h3>
              <p className="help-desc">
                Train staff on security protocols, phishing awareness, data
                protection, fostering a vigilant culture to mitigate internal
                and external risks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
