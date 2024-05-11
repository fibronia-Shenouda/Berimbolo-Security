import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { GeneralHelp } from "./components/GeneralHelp";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <LandingPage />
        <Services />
        <Contact />
        <Products />
        <GeneralHelp />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
