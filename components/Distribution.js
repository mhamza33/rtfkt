import React from "react";
import styles from "../styles/Home.module.css";

const Distribution = () => {
  return (
    <div className={styles.distribution}>
      <h1>
        <u>TOTAL DISTRIBUTIONS/</u>
      </h1>
      <img src="/chart.svg" alt="Sorry!" />
      <p>
        We tailored our distribution mechanic with our early supporters and
        collectors in mind, team’s hard work, and giving a chance for those who
        just discovered RTFKT recently to be a part of the next gen ecosystem
        we’re buildin
      </p>
    </div>
  );
};

export default Distribution;
