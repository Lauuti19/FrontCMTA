import React from "react";
import { AboutTitle } from "../components/Titles";
import About from "../components/About";

const AboutPage = () => {
    return (
        <div className="about-page">
          <AboutTitle />
          <About />
        </div>
    );
}
export default AboutPage;