import React from "react";
import styles from "../styles/Home.module.css";

const LandingHeader = () => {
  return (
    <div className={styles.landing_header}>
      <div className={styles.clonex}>
        <img src="/clonex.svg" alt="Sorry!" />
      </div>
      <div className={styles.clone}>
        <img src="/clone.svg" alt="Sorry!" />
      </div>
    </div>
  );
};

export default LandingHeader;
