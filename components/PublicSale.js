import React from "react";
import styles from "../styles/Home.module.css";

const PublicSale = () => {
  return (
    <div className={styles.public_sale}>
      <h1>
        <u>PUBLIC SAL</u>E/
      </h1>
      <h1>08.367</h1>
      <p>
        We are still confirming the price of mint for the public sale. The
        public sale will be a dutch auction where each buyer can purchase 3
        Avatars per user’s wallet.
      </p>
    </div>
  );
};

export default PublicSale;
