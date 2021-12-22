import React from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import LandingHeader from "../components/LandingHeader";
import About from "../components/About";
import Sale from "../components/Sale";
import PublicSale from "../components/PublicSale";
import Distribution from "../components/Distribution";
import Collaboration from "../components/Collaboration";
import Roadmap from "../components/Roadmap";
import Trajetory from "../components/Trajetory";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <NavBar />
      <LandingHeader />
      <About />
      <Sale />
      <PublicSale />
      <Distribution />
      <Collaboration />
      <Roadmap />
      <Trajetory />
      <Footer />
    </div>
  );
};

export default Landing;
